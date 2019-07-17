// Constructors ---------------------------------- //
//  Person Constructor

// function Person(name , dob){
//     this.name = name;
//     this.birthday = new Date(dob);    

//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return  ageDate.getUTCFullYear() - 1970;
//     }
// };


// const brad = new Person('brad' , '06-16-1997');
// // const john = new Person('john', 25);


// console.log(brad);
// console.log(john);

//  PRototypes 
// Each OBject HAs a prototype
// Prototype is an object
// Objects inherit it 's methods and properties from it's prototype  Object.prototype





function Person(name ,lastName, dob){
    this.name = name;
    this.lastName = lastName;
    this.birthday = new Date(dob);    

    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return  ageDate.getUTCFullYear() - 1970;
    // }
};

Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return  ageDate.getUTCFullYear() - 1970;
};

const john = new Person('john' , 'smith', '05-05-1980');

console.log(john);
















































