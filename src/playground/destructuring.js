//
// Object Destructuring
//

// const person = {
//   name: "HQ",
//   age: "29",
//   location: {
//     city: "Philly",
//     temp: 82
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`)

// const { temp: temperature, city } = person.location;

// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


//
// Array Destructuring
//

const address = ['1 Parker Avenue', 'Philadelphia', 'Pennsylvania', '19128'];

const [, city, state= "Hell"] = address;

console.log(`Your are in ${city} ${state}.`);

const menu = ['Coffee (iced)', '$2.00', '$3.50', '$3.75'];

const [item, smallPrice, mediumPrice, largePrice] = menu;

console.log(`A medium ${item} costs ${largePrice}.`);