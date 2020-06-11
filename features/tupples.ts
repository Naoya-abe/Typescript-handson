const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

// TYpe alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const splite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// Tupeleを使うんだったら、Objectを使ったほうが良い
