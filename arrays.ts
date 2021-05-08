// Arrays type annotation
const myArray: string[] = [];

// Arrays type inference
const carMakers = ['Ford', 'Toyota', 'Chevy'];

// Two dimensional arrays
const carsByMake = [
  ['Ford', 'F150'],
  ['Toyota', 'Corolla'],
  ['Chevy', 'Camaro'],
];

// Type inference when extracting values
// TS will prevent incompatible values to be push in the array
const bestCar = carsByMake[1];
const myCar = carsByMake.pop();

// Type inference help with 'map'
carMakers.map((car) => {
  return car.toUpperCase();
});

// Flexible types
const account: (string | number | Date)[] = [];
const profile: (string | number)[] = ['Carlos', 41];
const importantDates = [new Date(), '2030-10-10'];
