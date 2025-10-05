// console.log(emptyObj);
// const obj = {
//   name: "Asif",
//   age: 24,
// };

// console.log(obj.name);
// console.log(obj["age"]);

// obj.isMarried = false;
// console.log(obj);

// obj["first-name"] = "Md Asif";
// console.log(obj);

// obj.name = "Probin";
// obj.age = 25;
// console.log(obj);

// delete obj.isMarried;
// delete obj["first-name"];
// console.log(obj);console.log("Object and object manipulations");

// const emptyObj = {};

//dynamic property handling

// const name = "first-name";
// const age = 25;
// const dynamicObj = {
//   [name]: "Asif",
//   age: age,
// };
// console.log(dynamicObj);

//ways to create an object - constructor function

// function Car(name, model, seat) {
//   this.carName = name;
//   this.carModel = model;
//   this.seats = seat;
//   // return `Car name is:${this.carName} model is:${this.carModel} seats :${this.seats}`;
// }

// bmwCar = new Car("BMW", "X6", 5);
// console.log(bmwCar);
// audiCar = new Car("Audi", "r8", 2);
// console.log(audiCar);

// console.log(bmwCar instanceof Car);

// function Student(id, name, className) {
//   this.id = id;
//   this.name = name;
//   this.class = className;
// }

// const student1 = new Student(2323, "Asif", "E");
// console.log(student1);

// const student2 = new Student(2432, "Probin", "G");
// console.log(student2);

//Object type
// const person1 = new Object();
// // crossOriginIsolated.log(person1);
// console.log(person1);
// person1.name = "Asif";
// person1["is admin"] = true;
// console.log(person1);

//factory function - returns a new object everytime it is called

function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log(`name is ${this.name} and age is ${this.age}`);
    },
  };
}

//object methods - any function inside an object is called method

// const profile = {
//   name: "Md Asif",
//   company: "Brain Station 23",
//   message: function () {
//     console.log(`Name:${this.name} and works at ${this.company}`);
//   },
// };
// console.log(profile.name, profile.company);
// profile.message();

const student = {
  name: "Asif",
  id: 232311167,
  address: {
    city: "Rajshahi",
    zip: 24231,
    division: "Rajshahi",
    country: "Bangladesh",
  },
  salary: undefined,
};
// console.log(student.name);
// console.log(student.address.city);

//if a property exists in an object - in operator

// console.log(student.salary); //undefined

// if (!student.salary) {
//   console.log("property doesn't exists");
// } else {
//   console.log("property exists");
// }

// console.log("salary" in student);

//looping an object
// console.log(student.keys);
// const keys = Object.keys(student);
// console.log(keys);
// for (let i = 0;i<)

// for (let key in student) {
//   // console.log(key);
//   console.log(student[key]);
// }

// const obj = {
//   val1: "Asif",
//   age: 23,
//   arr: [24, 2312, 22, 2424, 2, 4],
//   obj: { a: "b" },
// };

// for (let key in obj) {
//   // console.log(key);
//   // console.log(obj[key]);
//   // console.log(`${key}:${obj[key]}`);
//   console.log(key + ":" + obj[key]);
// }

// console.log(Object.keys(student));

// //is two objects equal
// const obj1 = {
//   name: "Asif",
// };
// const obj2 = {
//   name: "Asif",
// };
// console.log(obj1 === obj2);
