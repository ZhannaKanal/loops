const repeatStringNumTimes = (str, num) => {
  let arr = [];
  if (!num <= 0) {
    for (let i = 0; i < num; i++) {
      arr.push(str);
    }
    return arr
  } else {
    return "";
  }
};
