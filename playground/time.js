var moment = require('moment');

// // jan 1 1970 00:00:00 am

// var date = new Date();
// console.log(date.getMonth());
var createdAt = new Date().getTime();
var date = moment(createdAt);
date.add(1, 'years');
var sometimesamp = moment().valueOf();
console.log(date.format('h:mm a'));
console.log(sometimesamp);