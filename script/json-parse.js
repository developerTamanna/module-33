const person ='{"name":"John", "age":30, "car":null}'
const personObj = JSON.parse(person)
let personName = personObj.name;
let personAge = personObj.age;
console.log(personName);
console.log(personAge);


//? next:

const jsonString = '{"name":"tamanna", "age":22, "city":"sylhet"}'


const persons = JSON.parse(jsonString);
console.log(persons.name);
console.log(persons.age);
console.log(persons.city);
