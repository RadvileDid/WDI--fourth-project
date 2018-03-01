const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
mongoose.connect(dbURI, { useMongoClient: true });

const User = require('../models/user');
const Video = require('../models/video');

Video.collection.drop();
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
  }, {
    name: 'Harry',
    username: 'Botter Potter',
    email: 'harry@harry.com',
    password: 'harry',
    passwordConfirmation: 'harry',
    profilePicture: 'http://www.comedycentral.co.uk/sites/default/files/styles/image-w-520-h-520-scale/public/cc_uk/galleries/large/2017/01/10/ross_finds_out_rachel_pregnant.jpg?itok=gYlbc7Cn'
  }, {
    name: 'Ron',
    username: 'Weasley',
    email: 'ron@ron.com',
    password: 'ron',
    passwordConfirmation: 'ron',
    profilePicture: 'http://www.comedycentral.co.uk/sites/default/files/styles/image-w-520-h-520-scale/public/cc_uk/galleries/large/2017/01/10/ross_finds_out_rachel_pregnant.jpg?itok=gYlbc7Cn'
  }])
  .then(users => {
    console.log(`${users.length} users were created!`);

    return Video
      .create([{
        title: 'BBO | QUAREN\'S BRIDGE',
        danceStyle: ['Locking'],
        videoId: 'https://www.youtube.com/watch?time_continue=1&v=j7hmwrov9ag',
        createdBy: users[0],
        upvotes: [
          users[1],
          users[2],
          users[3],
          users[4]
        ]
      },
      {
        title: 'Hazell Dean - Searchin\' | IBUKI choreography | Prepix Dance Studio',
        danceStyle: ['Wacking'],
        videoId: 'https://www.youtube.com/watch?v=7crqVBN110Y',
        createdBy: users[0],
        upvotes: [
          users[1],
          users[2]
        ]
      },
      {
        title: 'MADD CHADD | MECHANICAL MONDAY | KANO - IM READY',
        danceStyle: ['Popping'],
        videoId: 'https://www.youtube.com/watch?time_continue=1&v=MXyOjDp5CwQ',
        createdBy: users[0],
        upvotes: [
          users[1],
          users[2],
          users[3],
          users[4]
        ]
      },
      {
        title: 'Chris Brown "TO MY BED" | Duc Anh Tran x Daniel Fekete Choreography',
        danceStyle: ['Locking'],
        videoId: 'https://www.youtube.com/watch?time_continue=1&v=hoCO2iaSu58',
        createdBy: users[1],
        upvotes: [
          users[1],
          users[2]
        ]
      },
      {
        title: 'THE KINJAZ "Heritage" (CloZee Remix)',
        danceStyle: ['Wacking'],
        videoId: 'https://www.youtube.com/watch?time_continue=1&v=InxSxDDBhe8',
        createdBy: users[1],
        upvotes: [
          users[3],
          users[4]
        ]
      },
      {
        title: 'SLIPS & SLURS | DUBSTEP',
        danceStyle: ['Popping'],
        videoId: 'https://www.youtube.com/watch?time_continue=1&v=qLgR4dZ4WXk',
        createdBy: users[1],
        upvotes: [
          users[2],
          users[3],
          users[4]
        ]
      },
      {
        title: 'Finesse - Bruno Mars ft. Cardi B / May J Lee X Austin Pak Choreography',
        danceStyle: ['Popping', 'Locking'],
        videoId: 'https://www.youtube.com/watch?time_continue=1&v=PeQ4y-E8xj4',
        createdBy: users[2],
        upvotes: [
          users[1],
          users[0],
          users[3],
          users[4]
        ]
      },
      {
        title: 'Sorority @ Auckland Regionals 2017',
        danceStyle: ['Wacking'],
        videoId: 'https://www.youtube.com/watch?time_continue=1&v=3SOIXxHzrf0',
        createdBy: users[4],
        upvotes: [
          users[3],
          users[4]
        ]
      },
      {
        title: 'A$AP Ferg - Plain Jane : Gangdrea Choreography',
        danceStyle: ['Popping', 'Locking'],
        videoId: 'https://www.youtube.com/watch?time_continue=1&v=sE8E0CxQg5g',
        createdBy: users[4],
        upvotes: [
          users[1],
          users[2],
          users[3],
          users[4]
        ]
      },
      {
        title: '[CHOREOGRAPHY] BTS (방탄소년단) DNA Dance Practice',
        danceStyle: ['Popping', 'Locking'],
        videoId: 'https://www.youtube.com/watch?v=GEIU_7v40Dw',
        createdBy: users[3],
        upvotes: [
          users[3],
          users[4]
        ]
      },
      {
        title: 'Havana - Camila Cabello ft. Young Thug / May J Lee Choreography',
        danceStyle: ['Popping', 'Locking'],
        videoId: 'https://www.youtube.com/watch?v=5LjQauipkt8',
        createdBy: users[3],
        upvotes: [
          users[1],
          users[4]
        ]
      },
      {
        title: 'Boa (보아) - 네가 돌아 (Nega Dola) | Dance Cover',
        danceStyle: ['Popping', 'Locking'],
        videoId: 'https://www.youtube.com/watch?v=kZOP-wHr9iA',
        createdBy: users[2],
        upvotes: [
          users[1]
        ]
      },
      {
        title: 'FRIENDS - Marshmello & Anne-Marie / Tina Boo Choreography',
        danceStyle: ['Popping', 'Locking'],
        videoId: 'https://www.youtube.com/watch?v=_xwX82Y0Oro',
        createdBy: users[0],
        upvotes: [
          users[1]
        ]
      },
      {
        title: 'Nicki Minaj - Trini Dem Girls - Choreography by Tricia Miranda - (ft Aidan Prince) @timmilgram',
        danceStyle: ['Popping', 'Locking'],
        videoId: 'https://www.youtube.com/watch?v=qJaTxaulAMo',
        createdBy: users[1],
        upvotes: [
          users[1],
          users[3]
        ]
      },
      {
        title: 'Eric Bellinger - G.O.A.T. - Choreography by Nicole Kirkland | #TMillyTV',
        danceStyle: ['Popping', 'Locking'],
        videoId: 'https://www.youtube.com/watch?v=hvQQb7cT2F8',
        createdBy: users[2],
        upvotes: [
          users[1],
          users[2],
          users[3],
          users[4]
        ]
      },
      {
        title: 'Worth it - Fifth Harmony ft.Kid Ink / May J Lee Choreography',
        danceStyle: ['Popping', 'Locking'],
        videoId: 'https://www.youtube.com/watch?v=zUDXj8REpAI',
        createdBy: users[2],
        upvotes: [
          users[3],
          users[4]
        ]
      }]);
  })
  .then((videos) => {
    console.log(`${videos.length} videos created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
