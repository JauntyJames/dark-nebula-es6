removeWithoutCopy = (arr, item) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

append = (arr, item) => {
  arr.push(item);
  return arr;
};

truncate = (arr) => {
  arr.pop();
  return arr;
};

prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

curtail  = (arr) => {
  arr.shift();
  return arr;
};

concat = (arr1, arr2) => {
  arr3 = arr1.concat(arr2);
  return arr3;
};

insert = (arr, item, index) => {
  newArr = arr.splice(index, 0, item);
  return arr;
}

count = (arr, item) => {
  let itemCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      itemCount++;
    }
  }
  return itemCount;
};

duplicates = (arr) => {
  arr.sort();
  let duplicateItems = [];
  let checkNum;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === checkNum && !duplicateItems.includes(arr[i])) {
      duplicateItems.push(arr[i]);
    }
    checkNum = arr[i];
  }
  return duplicateItems;
};

square = (arr) => {
  newArr = arr.map(x => x ** 2 );
  return newArr;
};

findAllOccurrences = (arr, item) => {
  let indeces = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      indeces.push(i);
    }
  }
  return indeces;
};
