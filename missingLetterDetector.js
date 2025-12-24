const fearNotLetter = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1].charCodeAt() - str[i].charCodeAt() > 1) {
      return false
    }
  }
};
