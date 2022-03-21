//what is interface=>  It is templete for defining data of property of object

/**syntax
   interface interface_name{
     property_name:"data_type"
     property_name:"data_type"
     functionname:()=> data_type
   }
 */

interface userTypes{
    name: string
    age: number
    getName:()=>number
}

let user1: userTypes = {
    name: "Rambhu",
    age: 45,
    getName: function () {
        return this.name
    }
}
console.log(user1.getName())

