const { sequelize, User } = require('./models');
const express = require('express');
const app = express();
const userRoutes = require('./routes/router');
//TEST CODE FOR THE DATABASE CONNECTION
app.use(express.json());

//Routes
app.use('/users', userRoutes);

//Server
app.listen({ port: 5000 }, async () => {
  console.log('running!!');
  await sequelize.sync({ force: true });
  //await sequelize.sync();
  console.log('synced !!');
});
