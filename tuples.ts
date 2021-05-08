// Tuples are like arrays but values cannot swap positions

// Create drink object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 60,
};

// Represent a drink wiht tuple
const pepsi: [string, boolean, number] = ['black', true, 40];

// Type alias
type Drink = [string, boolean, number];

const orangeJunice: Drink = ['orange', false, 30];
