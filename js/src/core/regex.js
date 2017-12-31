containsNumber = (string) => {
  let regex = /[0-9]/
  let found = regex.test(string);
  return found;
};

containsRepeatingLetter = (string) => {
  let regex = /([a-z|A-Z])\1/
  let found = regex.test(string);
  return found;
};

endsWithVowel = (string) => {
 let regex = /a$|e$|i$|o$|u$|A$|E$|I$|O$|U$/
 let found = regex.test(string);
 return found;
};

captureThreeNumbers = (string) => {
  let regex = /\d{3}/
  let found = string.match(regex);
  if (found !== null){
    return found[0];
  } else {
    return false;
  }
};

matchesPattern = (string) => {
  let regex = /^\d{3}-\d{3}-\d{4}$/
  let found = regex.test(string);
  return found;
};

isUSD = (string) => {
  let regex = /^\$(((\d{1,3},)?(\d{3},)*\d{3})|(\d{0,3}))(\.\d{2})?$/
  let found = regex.test(string);
  return found
};
