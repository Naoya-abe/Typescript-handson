// Arrays in Typescript
const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Why Typed Arrays ?

//// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//// Prevent incompatible values
carMakers.push(100);

//// Help with 'map'
carMakers.map((car : string) : string => {
  return car.toUpperCase();
});

// Multiple Types in Arrays

//// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2020-02-02");
importantDates.push(new Date());
importantDates.push(200);

// When to use Typed Arrays
