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

const getConsonantCount = (sentence) => {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let lowerCased = sentence.toLowerCase();
  let counter = 0;
  for (const char of lowerCased) {
    if (consonants.includes(char)) {
      counter++;
    }
  }
  return counter;
};

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

const getPunctuationCount = (sentence) => {
  const notPunctuations = " qwertyuiopasdfghjklzxcvbnm";
  let counter = 0;
  for (const char of sentence.toLowerCase()) {
    if (!notPunctuations.includes(char)) {
      counter++;
      console.log(char);
    }
  }
  return counter;
};

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

const getWordCount = sentence => {

}
