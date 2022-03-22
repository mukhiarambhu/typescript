// how to define type of property
export{}
class user{
    name: string //property name should be of string only
    constructor(name:string ) { //parameter which is passed should be of string only
        this.name=name
    }
}

let user1 = new user('Rambhu')
console.log(user1)

//how to define type of method in class

class member{
    name: string
    age:number
    constructor(name:string,age:number) {
        this.name = name
        this.age=age
    }
    getDetails():string { //if we donot return rather consoling it type will of void
        return `Name of member is ${this.name} and age is ${this.age}`
    }
}

let member1 = new member("rambhu", 45)
console.log(member1)
console.log(member1.getDetails())