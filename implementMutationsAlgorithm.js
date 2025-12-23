const mutation = arr => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    const lowered = arr[i].toLowerCase()
    newArr.push(lowered)
  }
}