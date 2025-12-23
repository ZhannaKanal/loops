const num = 4;
const factorialCalculator = (num) => {
  let result = 1;
  for (let i = result; i <= num; i++) {
    result*=i;
  }
  return result;
};
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
