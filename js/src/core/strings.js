reduceString = (str, amount) => {
  let newStr = "";
  let counter = 1;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) !== str.charAt(i - 1)){
      newStr = newStr + str.charAt(i);
      counter = 1
    } else if (str.charAt(i) === str.charAt(i - 1) && (counter < amount)) {
      newStr += str.charAt(i);
      counter++;
    }
  }
  return newStr;
};

reverseString = (str) => {
  let newStr = "";
  for (var i = str.length; i >= 0; i--) {
    newStr += str.charAt(i);
  }
  return newStr;
};
