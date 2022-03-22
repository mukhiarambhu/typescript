export{}

class Parent{
    names:string; //setiing type of parent property
   setName(name:string):void{ //as this method isnot returning anything type is void
    this.names=name
    }
}

class Child extends Parent{
    age;
     constructor(age: number) {
        super()
        this.age=age
    }
    getName():string {
        return `name is ${this.names} and age is ${this.age}`
    }
}

let c1 = new Child(16)
c1.setName("rambhu")
console.log(c1.getName())