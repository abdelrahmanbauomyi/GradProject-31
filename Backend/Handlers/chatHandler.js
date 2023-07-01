
const { InMemorySessionStore } = require("./sessionStore");
const sessionStore = new InMemorySessionStore();
const { InMemoryMessageStore } = require("./messageStore");
const messageStore = new InMemoryMessageStore();
const siofu = require("socketio-file-upload");

const { sequelize, Doctor, User, Messages, Booking } = require('../models');
const { Op } = require("sequelize");

module.exports = (io, socket) => {

  io.on('connection', (socket) => {

    var uploader = new siofu();
    uploader.dir = "../ChatFiles";
    uploader.listen(socket);

    sessionStore.saveSession(socket.sessionID, {
      userID: socket.userID,
      username: socket.username,
      connected: true,
    });

    // emit session details
    socket.emit("session", {
      sessionID: socket.sessionID,
      userID: socket.userID,
    });

    // join the "userID" room
    socket.join(socket.userID);

    const users = [];
    // 
    const messagesPerUser = new Map();
    Messages.findAll({
      attributes: ["sender", "receiver", "content"],
      where: {
        [Op.or]: [
          { sender: socket.UserId },
          { receiver: socket.UserId }
        ]
      }
    }).then((messages) => {
      messages.forEach((message) => {
        const { sender, receiver, content } = message;
        const otherUser = socket.userID === sender ? receiver : sender;
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
    // replace using sequlize :  done & replaced
    /* 
    // messageStore.findMessagesForUser(socket.userID).forEach((message) => {
    //   const { from, to } = message;
    //   const otherUser = socket.userID === from ? to : from;
    //   if (messagesPerUser.has(otherUser)) {
    //     messagesPerUser.get(otherUser).push(message);
    //   } else {
    //     messagesPerUser.set(otherUser, [message]);
    //   }
    // }); 
    */
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
    }).then((booking) => {
      const otherUser = booking.Doctor.email === socket.userID ? booking.User.email : booking.Doctor.email;
      users.push({
        userID: otherUser,
        username: session.username,
        connected: session.connected,
        messages: messagesPerUser.get(session.userID) || []
      }
      )
    }).catch((error) => {
      console.log(error);
      console.log("error with the users event");
    })
    /* 
    // sessionStore.findAllSessions().forEach((session) => {
    //   users.push({
    //     userID: session.userID,
    //     username: session.username,
    //     connected: session.connected,
    //     messages: messagesPerUser.get(session.userID) || []
    //   });
    // }); 
    */
    socket.emit("users", users);
    // broadcasts that a user to connected to all other users
    socket.broadcast.emit("user connected", {
      userID: socket.userID,
      username: socket.username,
      connected: true,
      messages: [],
    });
    socket.on("private message", ({ content, to }) => {
      const message = {
        content,
        from: socket.userID,
        to,
      };
      socket.to(to).to(socket.userID).emit("private message", message);
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
          from: socket.userID,
          to: event.file.meta.to
        }
        socket.to(event.file.meta.to).to(socket.userID).emit("private message", message);
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
      user = socket.userID
      const matchingSockets = await io.in(socket.userID).allSockets();
      const isDisconnected = matchingSockets.size === 0;
      if (isDisconnected) {
        // notify other users
        socket.broadcast.emit("user disconnected", socket.userID);
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
          userID: socket.userID,
          username: socket.username,
          connected: false,
        });
      }
    });
  })
}
