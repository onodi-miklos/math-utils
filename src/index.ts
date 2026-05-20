const PI: number = 3.1415926535897932384626433832795028841971693993;
const pi: number = round(PI, 5);
function round(number: number, accuracy: number): number {
  if (typeof(number) !== 'number') {
    throw new Error('Function only accepts a number as arg. "number"')
  }
  if (typeof(accuracy) !== 'number' || (accuracy % 1 !== 0 && accuracy < 0)) {
    throw new Error('Function only accepts a positive integer as arg. "accuracy"')
  }
  const string: string = String(number);
  const index: number = string.indexOf(".");
  const rounded: number = Number(string.slice(0, index + accuracy + 1));
  return rounded;
}
function degToRad(deg: number): number {
  if (typeof deg !== "number") {
    throw new Error("Function only accepts numbers.");
  }
  const rad: number = (deg * pi) / 180;
  return rad;
}
function radToDeg(rad: number): number {
  if (typeof rad !== "number") {
    throw new Error("Function only accepts numbers.");
  }
  const deg: number = (rad / pi) * 180;
  return deg;
}
function getAvarage(numbers: number[]): number {
  let n: number = numbers.length;
  if (n === 0) {
    return 0;
  }
  let sum: number = 0;
  for (let i: number = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      throw new Error("Function only accepts a number array.");
    }
    sum += numbers[i];
  }
  const avarage: number = sum / n;
  return avarage;
}
function getFactorial(number: number): number {
  if (number === 0) {
    return 1;
  }
  if (number % 1 === 0 && number > 0) {
    let factorial: number;
    factorial = number * getFactorial(number - 1);

    return factorial;
  }
  throw new Error("Function accepts only integers not less than 0.");
}
function getAbsoluteValue(number: number):number{
  if (typeof number !== "number") {
    throw new Error("Function only accepts numbers.");
  }
  if (number === 0) {
    return 0;
  }
  else if (number > 0) {
    return number;
  }
  else {
    return -number;
  }
}

module.exports = {
  PI,
  pi,
  round,
  degToRad,
  radToDeg,
  getAvarage,
  getFactorial,
  getAbsoluteValue
};