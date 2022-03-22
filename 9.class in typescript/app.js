"use strict";
exports.__esModule = true;
var user = /** @class */ (function () {
    function user(name) {
        this.name = name;
    }
    return user;
}());
var user1 = new user('Rambhu');
console.log(user1);
//how to define type of method in class
var member = /** @class */ (function () {
    function member(name, age) {
        this.name = name;
        this.age = age;
    }
    member.prototype.getDetails = function () {
        return "Name of member is ".concat(this.name, " and age is ").concat(this.age);
    };
    return member;
}());
var member1 = new member("rambhu", 45);
console.log(member1);
console.log(member1.getDetails());
