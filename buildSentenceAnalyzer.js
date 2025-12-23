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
