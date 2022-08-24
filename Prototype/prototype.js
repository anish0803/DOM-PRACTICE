let person  = {
    name:'anish',
    age: 27,
    getdata: function(){
        console.log(`${this.name} is ${this.age} years old.`);
    },
};
person.getdata();