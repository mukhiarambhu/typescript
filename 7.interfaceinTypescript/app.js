//what is interface=>  It is templete for defining data of property of object
var user1 = {
    name: "Rambhu",
    age: 45,
    getName: function () {
        return this.name;
    }
};
console.log(user1.getName());
