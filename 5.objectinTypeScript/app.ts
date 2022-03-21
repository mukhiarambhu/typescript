let user = {
    name: "Rambhu",
    age: "26",
    address:"Pune",
}

/**default type of object is default type eg-> in this case name is string then it will accept string only not another data type, same as age is number it will take number only during updation of age, if other data type is inserted it will through an error.
user.name=6 => this will through error ,if we define type as any it will not through error.let user:any = {
    name: "Rambhu",
    age: "26",
    address:"Pune"
}*/


//udation

/**if we try to add email (user.email="mukhi@yahoo.in") in this object it will through an error that property "email" is not defined onto object*/

// define custom type object(Interface)-> interface is a typed templete defining which key will take what type of data

interface usersType{
    name: string,
    age: number,
    address:string
}

let user1: usersType={
    name: "hello",
    age: 24,
    address:"thane"
}

// let newUser= {...user1,email:"abc@.com"}
// console.log(newUser)