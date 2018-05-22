const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://localhost:5432/makersbnb');

const Space = sequelize.define('space', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  nightPrice: {
    type: Sequelize.INTEGER
  }
});

Space.sync({force: true}).then(() => {
  return Space.create({
    title: "Ellie\'s space",
    description: "A small hole in the ground",
    nightPrice: 100000
  })
})
