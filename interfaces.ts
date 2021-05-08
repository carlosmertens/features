// Create old car object
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// Not the best approach
// Create function to print vehicle
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(
    `Name: ${vehicle.name} - Year: ${vehicle.year} - Broken: ${vehicle.broken}`
  );
};

// Call function
printVehicle(oldCivic);

//// USE INTERFACE (best approach)
// Interfaces requires a satisfactory variables
interface Vehicle {
  today: Date;
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// Create new car object
const newCar = {
  today: new Date(),
  name: 'Pajero',
  year: 2007,
  broken: false,
  summary(): string {
    return `This car named ${this.name} is from year ${this.year}`;
  },
};

const consoleVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
  console.log(
    `Name: ${vehicle.name} - Year: ${vehicle.year} - Broken: ${vehicle.broken}`
  );
};

consoleVehicle(newCar);
