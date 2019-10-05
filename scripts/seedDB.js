const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/usersinpecom"
);


const userSeed = [
  {
    "memberId": "james@yahoo.com",
    "memberName": "Tony James",
    "userName": "james@yahoo.com",
    "email": [ "james@yahoo.com" ],    
    "password": "123456",
    "cCard": 2635211252523654,
    "userTheme": "theme1",
    "userImage": "https://lmtrain.github.io/lm-images/assets/images/bugatti_1.jpg",
    "colorDb": "White",
    "textalignDb": "center",
    "divfontsizeDb": "38px",
    "pfontsizeDb": "16px",
    "fontfamilyDb": "Calibri",
    "contact": {
      "address": "5454 Victory Lane, Andover, MN 55304",
      "phone": 2154254252,
      "email": "james@yahoo.com"
    },
  }  
];

db.user
  .remove({})
  .then(() => db.user.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
