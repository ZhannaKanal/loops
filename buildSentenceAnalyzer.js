const getVowelCount = sentence => {
  let lowerCased = sentence.toLowerCase()
  var counter = 0;
  for(let i=0; i<lowerCased.length; i++){
    if(lowerCased[i]==="a" || lowerCased[i]==="e" || lowerCased[i]==="o"|| lowerCased[i]==="i" || lowerCased[i]==="u"){
      counter+=1;
    }
  }
  return counter;
}
console.log(getVowelCount("Apples are tasty fruits"))