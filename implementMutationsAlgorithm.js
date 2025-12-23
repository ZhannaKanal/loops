const mutation = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    const lowered = arr[i].toLowerCase()
    newArr.push(lowered)
  }
  for(const char of newArr[1]){
    if(!newArr[0].includes(char)){
      return false;
    }
  }
  return true;

}