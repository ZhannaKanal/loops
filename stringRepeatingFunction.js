const repeatStringNumTimes = (str, num) => {
  let arr = [];
  if (!num <= 0) {
    for (let i = 0; i < num; i++) {
      arr.push(str);
    }
    return arr.join("");
  } else {
    return "";
  }
};

const test = repeatStringNumTimes("*", 8);
console.log(test);

const test2 = repeatStringNumTimes("abc", -2);
console.log(test2);
