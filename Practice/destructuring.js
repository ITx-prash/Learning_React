//What does destructuring actually mean?
//Destructuring is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//It is a JavaScript expression that allows us to extract data from arrays, objects, maps and sets.
//It is a short hand syntax that allows us to extract multiple properties from an object or items from an array and assign them to variables. It is a more readable and easier way to extract data from arrays and objects.

const arr = ["Ram", "Gyan", "ALex", "Romeo", 45, 68];
//traditional way
const first1 = arr[0];
const second2 = arr[1];
// ...
console.log(first1, second2); //Ram Gyan

//This is the way to destructure the array
const [first, second, third, fourth, fifth, sixth] = arr;
console.log(first, second, third, fourth, fifth, sixth); //Ram Gyan ALex Romeo 45 68

//can also do for the functions as well
function func() {
  return [1, 2, 3];
}
let a, b, c;
[a, b, c] = func();
console.log(a, b, c); //1 2 3
//if  i want to skip the second value
[a, , c] = func();
console.log(a, c); //1 3

//for object destructuring
const obj = { name: "Ram", age: 45, city: "Delhi" };
//it uses curly braces
//it uses the key name to destructure the object
const { name, age, city } = obj;
console.log(name, age, city); //Ram 45 Delhi
//it is not necessary to use the same name of the key
//you can use any name
const { name: n, age: ageAlias, city: cityAlias } = obj;
console.log(n, ageAlias, cityAlias); //Ram 45 Delhi
//function destructuring
const person={
  name:"Ram",
  age:41,
  city:"Delhi",
  greet: function(){
    console.log("Hello");
  }
}
//here we are destructuring the object person and passing it to the function
// as an argument, we follow the same syntax as we did for the object destructuring
//i.e. the default key name is used to destructure the object
//we can also use the alias name for the key, here name as nam
function printPerson({name:nam,age,city,greet}){
  greet();
  console.log(nam,age,city);
}
printPerson(person);
//Hello
//Ram 45 Delhi