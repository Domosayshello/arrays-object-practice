 // Problem 1
 const numbers = [1,2,3]
 const [first, second, third] = numbers;
 
 console.log(second);
 
 //Problem 2
 const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const {name: personName, city:personCity} = person;
console.log(personName)
console.log(personCity)


const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};

//Problem 3
// const keyArray = []
// for (const key of Object.keys(car)){
//   keyArray.push(key)
// }
const keyArray = Object.keys(car)
console.log(keyArray)

//Problem 4
// const valuesArray = []
// for (const value of Object.values(car)){
//   valuesArray.push(value)
// }
const valuesArray = Object.values(car)
console.log(valuesArray)

//Problem 5
// const entriesArray = [];
// for (const entries of Object.entries(car)){
//   entriesArray.push(entries)
// }
const entriesArray = Object.entries(car)
console.log(entriesArray)
