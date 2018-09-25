module.exports = function solveEquation(equation) {

  let arr = equation.split(' ');
  let a = arr[0];
  let b = parseInt(arr[3] + arr[4]);
  let c = parseInt(arr[7] + arr[8]);
  let formula = (b * b) - (4 * a * c);
  let x1 = Math.round(((b - 2 * b) + Math.sqrt(formula)) / (2 * a));
  let x2 = Math.round(((b - 2 * b) - Math.sqrt(formula)) / (2 * a));
  let result = [x1, x2];
  result.sort((a, b) => a - b);
  return result;
       }
