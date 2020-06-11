class Vehicle {
  //   color: string = "red";

  //   constructor(color : string) {
  //     this.color = color;
  //   }

  constructor(public color : string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels : number, public color : string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "blue");
car.startDrivingProcess();
