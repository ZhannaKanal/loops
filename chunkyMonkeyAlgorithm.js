const chunkArrayInGroups = (arr, num) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += num) {
    let sliced = arr.slice(i, i + num);
    newArr.push(sliced);
  }
  return newArr;
};
