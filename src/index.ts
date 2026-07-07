const PI: number = 3.1415926535897932384626433832795028841971693993;
const pi: number = sliceRound(PI, 5);

function sliceRound(number: number, accuracy: number): number {
        if (number === undefined || accuracy === undefined) {
                throw new Error("Fuction takes two numbers as arguments");
        }
        if (typeof number !== "number") {
                throw new Error(
                        'Function only accepts a number as arg. "number"',
                );
        }
        if (
                typeof accuracy !== "number" ||
                (accuracy % 1 !== 0 && accuracy < 0)
        ) {
                throw new Error(
                        'Function only accepts a non-negative integer as arg. "accuracy"',
                );
        }
        const string: string = String(number);
        const index: number = string.indexOf(".");
        let rounded: number = Number(string.slice(0, index + accuracy + 1));
        if (accuracy === 0) {
                rounded = Number(string.slice(0, index + accuracy));
        }
        return rounded;
}
function round(number: number, accuracy: number): number {
        if (number === undefined || accuracy === undefined) {
                throw new Error("Fuction takes two numbers as arguments");
        }
        if (typeof number !== "number") {
                throw new Error(
                        'Function only accepts a number as arg. "number"',
                );
        }
        if (
                typeof accuracy !== "number" ||
                (accuracy % 1 !== 0 && accuracy < 0)
        ) {
                throw new Error(
                        'Function only accepts a non-negative integer as arg. "accuracy"',
                );
        }
        const rounded: number = Math.round(number / accuracy) * accuracy;
        return rounded;
}

function degToRad(deg: number): number {
        if (deg === undefined) {
                throw new Error("Fuction takes a number as argument");
        }
        if (typeof deg !== "number") {
                throw new Error("Function only accepts numbers");
        }
        const rad: number = (deg * pi) / 180;
        return rad;
}

function radToDeg(rad: number): number {
        if (rad === undefined) {
                throw new Error("Fuction takes a number as argument");
        }
        if (typeof rad !== "number") {
                throw new Error("Function only accepts numbers");
        }
        const deg: number = (rad / pi) * 180;
        return deg;
}

function getAvarage(numbers: number[]): number {
        if (numbers === undefined) {
                throw new Error("Fuction takes a number array as argument");
        }
        let n: number = numbers.length;
        if (n === 0) {
                return 0;
        }
        let sum: number = 0;
        for (let i: number = 0; i < numbers.length; i++) {
                if (typeof numbers[i] !== "number") {
                        throw new Error("Function only accepts a number array");
                }
                sum += numbers[i];
        }
        const avarage: number = sum / n;
        return avarage;
}

function getFactorial(number: number): number {
        if (number === undefined) {
                throw new Error("Function takes a number as argument");
        }
        if (number === 0) {
                return 1;
        }
        if (number % 1 === 0 && number > 0) {
                let factorial: number;
                factorial = number * getFactorial(number - 1);

                return factorial;
        }
        throw new Error("Function accepts only integers not less than 0");
}

function getAbsoluteValue(number: number): number {
        if (number === undefined) {
                throw new Error("Function takes a number as argument");
        }
        if (typeof number !== "number") {
                throw new Error("Function only accepts a number as argument");
        }
        if (number === 0) {
                return 0;
        } else if (number > 0) {
                return number;
        } else {
                return -number;
        }
}

function getReciprocal(number: number): number {
        if (number === undefined) {
                throw new Error("Function takes a number as argument");
        }
        if (typeof number !== "number") {
                throw new Error("Function only accepts a number as argument");
        }

        if (number !== 0) {
                return 1 / number;
        } else {
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
