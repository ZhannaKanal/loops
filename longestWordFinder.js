const findLongestWordLength = str => {
  let arr = []
  let splittedString = str.split(" ");
  for(let i =0; i<splittedString.length; i++){
    let stringLength = splittedString[i].length
    arr.push(stringLength)
  }
  const findMax = Math.max(...arr)
  return findMax
}