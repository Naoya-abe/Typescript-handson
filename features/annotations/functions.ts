const add = (a : number, b : number): number => {
  return a + b;
};

const subtract = (a : number, b : number): number => {
  return a - b;
};

function divide(a : number, b : number): number {
  return a / b;
}

const multiply = function (a : number, b : number): number {
  return a * b;
};

// Void: 関数が正常に終了した結果何も返さない
// Never: そもそも関数が正常に終了して値が帰ってくるわけない
const throwError = (message : string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: "sunny"
};

const logWeather = (forecast : {
  date: Date;
  weather: string
}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

const logWeather2 = ({date, weather} : {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
