"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PI = 3.1415926535897932384626433832795028841971693993;
const pi = round(PI, 5);
function round(number, accuracy) {
    if (typeof (number) !== 'number') {
        throw new Error('Function only accepts a number as arg. "number"');
    }
    if (typeof (accuracy) !== 'number' || (accuracy % 1 !== 0 && accuracy < 0)) {
        throw new Error('Function only accepts a positive integer as arg. "accuracy"');
    }
    const string = String(number);
    const index = string.indexOf(".");
    const rounded = Number(string.slice(0, index + accuracy + 1));
    return rounded;
}
function degToRad(deg) {
    if (typeof deg !== "number") {
        throw new Error("Function only accepts numbers.");
    }
    const rad = (deg * pi) / 180;
    return rad;
}
function radToDeg(rad) {
    if (typeof rad !== "number") {
        throw new Error("Function only accepts numbers.");
    }
    const deg = (rad / pi) * 180;
    return deg;
}
function getAvarage(numbers) {
    let n = numbers.length;
    if (n === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i++; i < numbers.length) {
        if (typeof i !== "number") {
            throw new Error("Function only accepts numbers.");
        }
        sum += numbers[i];
    }
    const avarage = sum / n;
    return avarage;
}
function getFactorial(number) {
    if (number === 0) {
        return 1;
    }
    if (number % 1 === 0 && number > 0) {
        let factorial;
        factorial = number * getFactorial(number - 1);
        return factorial;
    }
    throw new Error("Function accepts only integers not less than 0.");
}
module.exports = {
    PI,
    pi,
    round,
    degToRad,
    radToDeg,
    getAvarage,
    getFactorial,
};
//# sourceMappingURL=index.js.map