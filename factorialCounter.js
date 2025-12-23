const num = 5;
const factorialCalculator = (num) => {
  let result = 1;
  for (let i = result; i < num; i++) {
    let multiplied = result * i;
    result += multiplied;
  }
  return result;
};
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
