console.log("Object and object manipulations");

const emptyObj = {};
console.log(emptyObj);
const obj = {
  name: "Asif",
  age: 24,
};

console.log(obj.name);
console.log(obj["age"]);

obj.isMarried = false;
console.log(obj);

obj["first-name"] = "Md Asif";
console.log(obj);

obj.name = "Probin";
obj.age = 25;
console.log(obj);

delete obj.isMarried;
delete obj["first-name"];
console.log(obj);
