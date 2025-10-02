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

fucntion createUser(name,age){
  return {
    this
  }
}