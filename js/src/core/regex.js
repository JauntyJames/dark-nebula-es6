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

};

matchesPattern = (string) => {

};

isUSD = (string) => {

};
