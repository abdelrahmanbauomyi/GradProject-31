
const { InMemorySessionStore } = require("./sessionStore");
const sessionStore = new InMemorySessionStore();
const { InMemoryMessageStore } = require("./messageStore");
const messageStore = new InMemoryMessageStore();
const siofu = require("socketio-file-upload");

const { sequelize, Doctor, User, Messages, Booking } = require('../models');
const { Op } = require("sequelize");

module.exports = (io, socket) => {

  var uploader = new siofu();
  uploader.dir = "../ChatFiles";
  uploader.listen(socket);

  sessionStore.saveSession(socket.sessionID, {
    email: socket.email,
    username: socket.username,
    connected: true,
  });

  // emit session details
  socket.emit("session", {
    sessionID: socket.sessionID,
    email: socket.email,
  });

  // join the "userID" room
  socket.join(socket.email);

  const users = [];
  const messagesPerUser = new Map();
  Messages.findAll({
    attributes: ["sender", "receiver", "content"],
    where: {
      [Op.or]: [
        { sender: socket.email },
        { receiver: socket.email }
      ]
    }
  }).then((messages) => {
    messages.forEach((message) => {
      const { sender, receiver, content } = message;
      const otherUser = socket.email === sender ? receiver : sender;
      if (messagesPerUser.has(otherUser)) {
        messagesPerUser.get(otherUser).push({ sender, receiver, content });
      }
      else {
        messagesPerUser.set(otherUser, { sender, receiver, content });
      }
    })
  }).catch((err) => {
    console.log(err);
    console.log("error retreiving messages: from database ");
  })
  Booking.findAll({
    include: [
      {
        model: User,
        attributes: ['email']
      },
      {
        model: Doctor,
        attributes: ['email']
      }
    ],
    where: {
      UserId: {
        [Op.not]: null
      }
    },
    attributes: [
      [sequelize.col('Doctor.email'), 'doctor_email'],
      [sequelize.col('User.email'), 'user_email']
    ]
  }).then((bookings) => {
    bookings.forEach((booking) =>{
      const otherUser = (booking.Doctor.email === socket.email )? booking.User.email : booking.Doctor.email;
      session = sessionStore.findSession(otherUser);
      users.push({
        email: otherUser,
        username: session.username,
        connected: session.connected,
        messages: messagesPerUser.get(session.email) || []
      }
      )
    })
  }).catch((error) => {
    console.log(error);
    console.log("error with the users event");
  })
  socket.emit("users", users);
  // broadcasts that a user to connected to all other users
  socket.broadcast.emit("user connected", {
    email: socket.email,
    username: socket.username,
    connected: true,
    messages: [],
  });
  socket.on("private message", ({ content, to }) => {
    const message = {
      content,
      from: socket.email,
      to,
    };
    socket.to(to).to(socket.email).emit("private message", message);
    messageStore.saveMessage(message);
  });

  uploader.on("saved", function (event) {
    if (event.file.success) {
      console.log(event.file.name);
      // the reciver email should be stored in the event.file.meta.to
      // the file type should be stored in the event.file.meta.type
      console.log(event.file.meta.to);
      const message = {
        content: event.file.pathName,
        from: socket.email,
        to: event.file.meta.to
      }
      socket.to(event.file.meta.to).to(socket.email).emit("private message", message);
      messageStore.saveMessage(message);
    } else {
      socket.emit("upload did not succeed please reupload");
    }
  });

  // Error handler:
  uploader.on("error", function (event) {
    console.log("Error from uploader", event);
    socket.emit("failed to save image please re upload");
  });

  socket.on("disconnect", async () => {
    user = socket.email
    const matchingSockets = await io.in(socket.email).allSockets();
    const isDisconnected = matchingSockets.size === 0;
    if (isDisconnected) {
      // notify other users
      socket.broadcast.emit("user disconnected", socket.email);
      // save messages to database
      messages = messageStore.findMessagesForUser(user);
      messages.forEach((message) => {
        Messages.create({
          sender: message.from,
          receiver: message.to,
          content: message.content
        }).then(() => {
          console.log("msg added")
        }).catch((err) => {
          console.log(err);
          console.log("error with chatting message");
        })
      });
      messageStore.deleteMessagesForUser(user);
      // update the connection status of the session
      sessionStore.saveSession(socket.sessionID, {
        email: socket.email,
        username: socket.username,
        connected: false,
      });
    }
  });
}
