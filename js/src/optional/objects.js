alterContext = (fn, obj) => {
  return fn.call(obj);
};

alterObjects = (constructor, greeting) => {
  constructor.prototype.greeting = greeting;
  return constructor.greeting;
};

iterate = (obj) => {
  // Optional Challenge
  properties = []
  for(const [key, value] of Object.entries(obj)){
    properties.push(`${key}: ${value}`)
  }
  return properties
};
