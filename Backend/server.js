const { sequelize, User } = require('./models');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userRoutes = require('./routes/router');

//TEST CODE FOR THE DATABASE CONNECTION
app.use(express.json());
app.use(cookieParser());

//Routes
app.use('/', userRoutes);

//Server
app.listen({ port: 4000 }, async () => {
  console.log('running!!');
  await sequelize
    .sync
    // commented the force so it doesnt remove the database everytime you run
    // { force: true }
    ();
  //await sequelize.sync();
  console.log('synced !!')
});

// this export is required to test the app
module.exports = app;
