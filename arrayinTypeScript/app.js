"use strict";
exports.__esModule = true;
var users = ["Rambhu", "Akash", "Prakash"];
users.push("Amol"); //this is fine it will work
// users.push(1) this will not work as in array each item is string ,typescript is considering it as array of string.If anyone of element of array is number then it will allow to add number to array.
console.log(users);
//how to define type of array
var temp = ["abc", "def"];
console.log(temp);
//how to define array having multiple type
var temp1 = ["bdc", 1, true];
console.log(temp1);
