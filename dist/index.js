"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PI = 3.1415926535897932384626433832795028841971693993;
const pi = sliceRound(PI, 5);
function sliceRound(number, accuracy) {
    if (number === undefined || accuracy === undefined) {
        throw new Error("Fuction takes two numbers as arguments");
    }
    if (typeof number !== "number") {
        throw new Error('Function only accepts a number as arg. "number"');
    }
    if (typeof accuracy !== "number" ||
        (accuracy % 1 !== 0 && accuracy < 0)) {
        throw new Error('Function only accepts a non-negative integer as arg. "accuracy"');
    }
    const string = String(number);
    const index = string.indexOf(".");
    let rounded = Number(string.slice(0, index + accuracy + 1));
    if (accuracy === 0) {
        rounded = Number(string.slice(0, index + accuracy));
    }
    return rounded;
}
function round(number, accuracy) {
    if (number === undefined || accuracy === undefined) {
        throw new Error("Fuction takes two numbers as arguments");
    }
    if (typeof number !== "number") {
        throw new Error('Function only accepts a number as arg. "number"');
    }
    if (typeof accuracy !== "number" ||
        (accuracy % 1 !== 0 && accuracy < 0)) {
        throw new Error('Function only accepts a non-negative integer as arg. "accuracy"');
    }
    const rounded = Math.round(number / accuracy) * accuracy;
    return rounded;
}
function degToRad(deg) {
    if (deg === undefined) {
        throw new Error("Fuction takes a number as argument");
    }
    if (typeof deg !== "number") {
        throw new Error("Function only accepts numbers");
    }
    const rad = (deg * pi) / 180;
    return rad;
}
function radToDeg(rad) {
    if (rad === undefined) {
        throw new Error("Fuction takes a number as argument");
    }
    if (typeof rad !== "number") {
        throw new Error("Function only accepts numbers");
    }
    const deg = (rad / pi) * 180;
    return deg;
}
function getAvarage(numbers) {
    if (numbers === undefined) {
        throw new Error("Fuction takes a number array as argument");
    }
    let n = numbers.length;
    if (n === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== "number") {
            throw new Error("Function only accepts a number array");
        }
        sum += numbers[i];
    }
    const avarage = sum / n;
    return avarage;
}
function getFactorial(number) {
    if (number === undefined) {
        throw new Error("Function takes a number as argument");
    }
    if (number === 0) {
        return 1;
    }
    if (number % 1 === 0 && number > 0) {
        let factorial;
        factorial = number * getFactorial(number - 1);
        return factorial;
    }
    throw new Error("Function accepts only integers not less than 0");
}
function getAbsoluteValue(number) {
    if (number === undefined) {
        throw new Error("Function takes a number as argument");
    }
    if (typeof number !== "number") {
        throw new Error("Function only accepts a number as argument");
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
function getReciprocal(number) {
    if (number === undefined) {
        throw new Error("Function takes a number as argument");
    }
    if (typeof number !== "number") {
        throw new Error("Function only accepts a number as argument");
    }
    if (number !== 0) {
        return 1 / number;
    }
    else {
        throw new Error("Can not divide by 0");
    }
}
module.exports = {
    PI,
    pi,
    sliceRound,
    round,
    degToRad,
    radToDeg,
    getAvarage,
    getFactorial,
    getAbsoluteValue,
    getReciprocal,
};
//# sourceMappingURL=index.js.map