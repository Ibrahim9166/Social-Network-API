const { User } = require('../models');

const userData = [
  {
    username: 'BobbyBoe12',
    email: 'test@gmail.com'
  },
  {
    username: 'florencegiddy45',
    email: 'test2@gmail.com'
  },
  {
    username: 'DwaynetheBoulder',
    email: 'test3@hotmail.com'
  }
];

const seedUsers = () => User.insertMany(userData);

module.exports = seedUsers;