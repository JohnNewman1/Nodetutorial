const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://localhost:5432/todo');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
