// TYPE ANNOTATIONS
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Arrays
let colors: string[] = ['red', 'blue', 'green'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// TYPE INFERENCE
// If declaration and initialization are on the same line,
// Typescript will figure out the type of the value
let oranges = 10;
let model = 'volvo';

// WHEN TO USE ANNOTATIONS
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// JSON.parce() returns type: any, so we need type annotation
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}

// 2) Declare variable but initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  foundWord = true;
}

// 3) Type inference does not work
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
