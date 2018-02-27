const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const User = require('../models/user');
User.collection.drop();

User
  .create([{
    name: 'Joe',
    username: 'Big Joe-Z',
    email: 'joe@joe.com',
    password: 'joe',
    passwordConfirmation: 'joe',
    profilePicture: 'https://vignette.wikia.nocookie.net/p__/images/8/8e/Joey_with_a_chick.jpeg/revision/latest?cb=20160205231526&path-prefix=protagonist'
  }, {
    name: 'Rachel',
    username: 'Blue Dragon',
    email: 'rachel@rachel.com',
    password: 'rachel',
    passwordConfirmation: 'rachel',
    profilePicture: 'https://i.pinimg.com/736x/c3/fc/c3/c3fcc381c1c5b3245405dec76e6e87d4--rachel-green-outfits-michigan.jpg'
  }, {
    name: 'Ross',
    username: 'Red Ross',
    email: 'ross@ross.com',
    password: 'ross',
    passwordConfirmation: 'ross',
    profilePicture: 'http://www.comedycentral.co.uk/sites/default/files/styles/image-w-520-h-520-scale/public/cc_uk/galleries/large/2017/01/10/ross_finds_out_rachel_pregnant.jpg?itok=gYlbc7Cn'
  }])
  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
