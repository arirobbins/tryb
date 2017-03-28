// var angular = require('angular');

var moduleAppInit = angular.module("appInit", []);

var config = {
    apiKey: "AIzaSyCxf4NqfJiKnCRpz900LTiI41Vzq3VSxqA",
    authDomain: "girlscamp-2f624.firebaseapp.com",
    databaseURL: "https://girlscamp-2f624.firebaseio.com",
    storageBucket: "girlscamp-2f624.appspot.com",
    messagingSenderId: "1006970960556"
  };

var init = firebase.initializeApp(config);


moduleAppInit.config(init);

module.exports = moduleAppInit;
