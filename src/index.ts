const PI: number = 3.1415926535897932384626433832795028841971693993;
const pi: number = round(PI, 5)
function round(number: number, accuracy: number): number {
  const string: string = String(number)
  const index: number = string.indexOf('.')
  const rounded: number = Number(string.slice(0, (index + accuracy + 1)))
  return rounded;
}
function degToRad(deg: number): number {
  const rad: number = (deg * pi) / 180;
  return rad;
}
function radToDeg(rad: number): number {
  const deg: number = (rad / pi) * 180;
  return deg;
}
function avarage(numbers: number[]): number{
  let n: number = 0;
  let sum: number = 0;
  for (let i = 0; i++; i < numbers.length) {
    n++;
    sum+= numbers[i]
  }
  const avarage: number = sum / n;
  return avarage;
}

module.exports = { PI, pi, round, degToRad, radToDeg, avarage };
