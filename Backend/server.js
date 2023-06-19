const { sequelize, User } = require('./models');
const express = require('express');
const app = express();
const Checkers=require('./Handlers/periodicCheckersHandler')
const userRoutes = require('./routes/router');
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
const job1 =schedule.scheduleJob('* * * * *',Checkers.appoitmentStartChecker)
const job2 =schedule.scheduleJob('* * * * *',Checkers.appoitmentEndChecker)
// this export is required to test the app
module.exports = app;
app;
