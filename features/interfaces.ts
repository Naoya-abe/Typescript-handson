interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: "brawn",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}`;
  }
};

// const printVehicle = (vehicle : {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken? ${vehicle.broken}`);
// };

// printVehicle(oldCivic);

// Fixing long annotations with interface

const printSummary = (item : Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
