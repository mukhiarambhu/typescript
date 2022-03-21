export{}
function add(a:number,b ?:number): number {   //defining function type if it is number and we try to return string then it will through error
   return b ? a+b:a
}

console.log(add(100))

//we can define parameter type in function definition itself ,
//if second parameter is optional we can add by providing "?" like b?:number