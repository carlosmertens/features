class Vehicle {
  // Initial fields
  constructor(public color: string) {}

  // Public methods can be call anywhere
  public drive(): void {
    console.log('vroom, vroom');
  }

  // Protected methods can only be call inside this class or child classes
  protected honk(): void {
    console.log('beep, beep');
  }
}

const vehicle = new Vehicle('orange');
vehicle.drive();
console.log(vehicle.color);

class Car extends Vehicle {
  // Overwrite constructor
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // Overwrite inheritance
  public drive(): void {
    this.startDriving();
  }

  // Private methods can only be call inside this class
  private startDriving(): void {
    console.log('tut, tut');
    this.honk();
  }
}

const car = new Car(4, 'blue');
car.drive();
