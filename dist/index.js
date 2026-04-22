"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PI = 3.1415926535897932384626433832795028841971693993;
const pi = round(PI, 5);
function round(number, accuracy) {
    const string = String(number);
    const index = string.indexOf('.');
    const rounded = Number(string.slice(0, (index + accuracy + 1)));
    return rounded;
}
function degToRad(deg) {
    const rad = (deg * pi) / 180;
    return rad;
}
function radToDeg(rad) {
    const deg = (rad / pi) * 180;
    return deg;
}
module.exports = { PI, pi, round, degToRad, radToDeg };
//# sourceMappingURL=index.js.map