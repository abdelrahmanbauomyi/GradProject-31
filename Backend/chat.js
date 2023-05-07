const { sequelize,User, Messages,Booking } = require('./models');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const userRoutes = require('./routes/router');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const io = socketio(server);
//TEST CODE FOR THE DATABASE CONNECTION
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// !!!!!!!!!!!!!!!!!!!!!!STILL SOME WORK TO BE DONE

  // todo : dont know how to handle sessionsID
  //* thinking about replacing sessions with tokens need to get back to bayoumi

// ****************************************************
io.use(async (socket, next) => {

  if (user) {
      // userID is the user primary key , sessionID is tokenID
      socket.sessionID = sessionID;
      socket.userID = user.id;
      socket.username = session.username;
      return next();
    }
  
// ****************************************************
// supposed to be replaced by the block above
/*   
const sessionID = socket.handshake.auth.sessionID;
  if (sessionID) {
    const session = sessionStore.findSession(sessionID);
    if (session) {
      socket.sessionID = sessionID;
      socket.userID = session.userID;
      socket.username = session.username;
      return next();
    }
  }
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.sessionID = randomId();
  socket.userID = randomId();
  socket.username = username;
  next();
});
 */
});
// ***********************************************************
io.on("connection",async (socket) => {
// persist session
// probably dont need this as it can be replaced by token id and is saved in db
  // // /*   sessionStore.saveSession(socket.sessionID, {
//     userID: socket.userID,
//     username: socket.username,
//     connected: true,
//   }); */
//  this is important for one user per username
// emit session details
  socket.emit("session", {
    sessionID: socket.sessionID,
    userID: socket.userID,
  });
  // join the "userID" room
  socket.join(socket.userID);
  // fetch existing users

//* this is done (users) are people who can chat with each other  
const users = await Booking.findAll({
    where:{
      [Op.or]:[
        {UserId: req.user.id},
        {DoctorId: req.user.id}
      ]
    }
});

//* this is done (messages) table with all messages between users
const messagesPerUser = await Messages.findAll({where:{
    [Op.or]:[
      {sender:req.user.id},
      {receiver:req.user.id}
    ]
}
});
// * not needed
/* // //   send message to database
  // res.send(messages);
   */
                                /* // // const users = [];
                                // const messagesPerUser = new Map();
                                // messageStore.findMessagesForUser(socket.userID).forEach((message) => {
                                //   const { from, to } = message;
                                //   const otherUser = socket.userID === from ? to : from;
                                //   if (messagesPerUser.has(otherUser)) {
                                //     messagesPerUser.get(otherUser).push(message);
                                //   } else {
                                //     messagesPerUser.set(otherUser, [message]);
                                //   }
                                // }); */
//******************
//* need to replace 
// // /*   sessionStore.findAllSessions().forEach((session) => {
//     users.push({
//       userID: session.userID,
//       username: session.username,
//       connected: session.connected,
//       messages: messagesPerUser || [],
//     });
//   }); */


// * this is done
  socket.emit("users", users);

  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.userID,
    username: socket.username,
    connected: true,
    messages: [],
  });

  // * this is done
  // forward the private message to the right recipient (and to other tabs of the sender)
  socket.on("private message", ({ content, to }) => {
    const message = {
      content,
      from: socket.userID,
      to,
    };
    socket.to(to).to(socket.userID).emit("private message", message);
    Messages.create({
      sender: message.to,
      receiver: message.from,
      content: message.content
    }).then(()=>{
      console.log('messageCreated');
    }).catch((error)=>{
      console.log(error);
    });
  });



  //* this is done
  // notify users upon disconnection
  socket.on("disconnect", async () => {
    const matchingSockets = await io.in(socket.userID).allSockets();
    const isDisconnected = matchingSockets.size === 0;
    if (isDisconnected) {
      // notify other users
      socket.broadcast.emit("user disconnected", socket.userID);
      // update the connection status of the session
     }
  });
});

