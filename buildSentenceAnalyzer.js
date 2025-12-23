const getVowelCount = (sentence) => {
  let lowerCased = sentence.toLowerCase();
  const vowels = "aeiou";
  var counter = 0;
  for (const char of lowerCased) {
    if (vowels.includes(char)) {
      counter += 1;
    }
  }
  return counter;
};

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

const getConsonantCount = sentence => {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let lowerCased = sentence.toLowerCase();
  let counter = 0;
  for(const char of lowerCased){
    if(consonants.includes(char)){
      counter++;
    }
  }
  return counter;
}

console.log(getConsonantCount("HhH"))