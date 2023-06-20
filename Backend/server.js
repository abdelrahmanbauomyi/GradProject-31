const { sequelize, User } = require('./models');
const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const Checkers = require('./Handlers/periodicCheckersHandler')
const userRoutes = require('./routes/router');
const chatHandler = require('./Handlers/chatHandler');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const schedule = require('node-schedule');
//TEST CODE FOR THE DATABASE CONNECTION
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  }
});
const ChatNamespace = io.of("/chat");

const onConnection = (socket) => {
  chatHandler(io, socket)
}
// !! this works if frontend saves email address in local storage
ChatNamespace.use((socket, next) => {
  const sessionID = socket.handshake.auth.sessionID;
  if (sessionID) {
    // find existing session
    const session = sessionStore.findSession(sessionID);
    if (session) {
      socket.sessionID = sessionID;
      // user id = email, username =first,last name from the frontend
      socket.userID = session.userID;
      socket.username = session.username;
      return next();
    }
  }
  // frontend will have to send the username and userEmail from their side
  const username = socket.handshake.auth.username;
  const userID = socket.handshake.auth.email;

  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.sessionID = randomId();
  socket.userID = userID;
  socket.username = username;
  next();
})
ChatNamespace.on("connection", onConnection);
//Routes
app.use('/', userRoutes);

//Server
app.listen({ port: process.env.BACK_END_PORT }, async () => {
  console.log('running!!');
  await sequelize
    .sync
    // commented the force so it doesnt remove the database everytime you run
    // { force: true }
    ();
  //await sequelize.sync();
  console.log('synced !!');
});
const job1 = schedule.scheduleJob('* * * * *', Checkers.appoitmentStartChecker)
const job2 = schedule.scheduleJob('* * * * *', Checkers.appoitmentEndChecker)
// this export is required to test the app
module.exports = app;
app;
