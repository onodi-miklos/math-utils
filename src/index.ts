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

interface Radian {
        value: number;
        string: string;
}

// AI generated
function degToRad(deg: number): Radian {
        if (deg === undefined) {
                throw new Error("Fuction takes a number as argument");
        }
        if (typeof deg !== "number") {
                throw new Error("Function only accepts numbers");
        }

        const rad: number = (deg * PI) / 180;
        const numerator: number = Math.abs(deg);
        const denominator: number = 180;

        let simplifiedNumerator: number = numerator;
        let simplifiedDenominator: number = denominator;

        if (Number.isInteger(numerator)) {
                let greatestCommonDivisor: number = 1;

                for (let i = 1; i <= Math.min(numerator, denominator); i++) {
                        if (numerator % i === 0 && denominator % i === 0) {
                                greatestCommonDivisor = i;
                        }
                }

                simplifiedNumerator = numerator / greatestCommonDivisor;
                simplifiedDenominator = denominator / greatestCommonDivisor;
        }

        let string: string;

        if (deg === 0) {
                string = "0";
        } else if (simplifiedDenominator === 1) {
                string = `${deg < 0 ? "-" : ""}${simplifiedNumerator} PI`;
        } else if (simplifiedNumerator === 1) {
                string = `PI / ${simplifiedDenominator}`;
        } else {
                string = `${deg < 0 ? "-" : ""}${simplifiedNumerator} PI / ${simplifiedDenominator}`;
        }

        return {
                value: rad,
                string: string,
        };
}

function radToDeg(rad: number): number {
        if (rad === undefined) {
                throw new Error("Fuction takes a number as argument");
        }
        if (typeof rad !== "number") {
                throw new Error("Function only accepts numbers");
        }
        const deg: number = (rad / PI) * 180;
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
        } else {
                throw new Error(
                        "Function accepts only integers not less than 0",
                );
        }
}

function getFactorialUsingGamma(number: number): number {
        if (number === undefined) {
                throw new Error("Function accepts a number as argument");
        }

        return gamma(number);
}

// AI generated
function gamma(z: number): number {
        if (z === undefined) {
                throw new Error("Function accepts a number as argument");
        }

        const p: number[] = [
                676.5203681218851, -1259.1392167224028, 771.3234287776531,
                -176.6150291621406, 12.507343278686905, -0.13857109526572012,
                9.984369578019572e-6, 1.5056327351493116e-7,
        ];

        if (z < 0.5) {
                // Reflection formula
                return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
        }

        z -= 1;

        let x: number = 0.9999999999998099;

        for (let i = 0; i < p.length; i++) {
                x += p[i] / (z + i + 1);
        }

        const t = z + p.length - 0.5;

        return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
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
        getFactorialUsingGamma,
        gamma,
        getAbsoluteValue,
        getReciprocal,
};
