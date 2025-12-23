const mutation = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const lowered = arr[i].toLowerCase();
    newArr.push(lowered);
  }
  for (const char of newArr[1]) {
    if (!newArr[0].includes(char)) {
      return false;
    }
  }
  return true;
};
const arr = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"];
const arr2 = ["ate", "date"];
const test = mutation(arr);
console.log(test);
