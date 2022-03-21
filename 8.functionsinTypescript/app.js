"use strict";
exports.__esModule = true;
function add(a, b) {
    return b ? a + b : a;
}
console.log(add(100));
//we can define parameter type in function definition itself ,
//if second parameter is optional we can add by providing "?" like b?:number
