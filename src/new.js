// What does the `new` keyword actually do?

function Bird(name) {
  this.name = name;
}

Bird.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

// Manual implementation of the `new` keyword
function customNew(constructor, ...args) {
  // Step 1: create a new Object
  const newObj = {};

  // Step 2: we set the __proto__ of newObj
  Object.setPrototypeOf(newObj, constructor.prototype);
  // Alternative: obj.__proto__ = Bird.prototype;

  // Step 3: Call constructor with 'this' bound to our new object
  constructor.call(newObj, ...args);

  // Step 4: Return the new object
  return newObj;
}

// We use our `customNew` method to create a new instance of Bird
// without using the built-in `new` keyword
const bird = customNew(Bird, "mockingjay");
// Alternative: const bird = new Bird('mockingkay');

// bird has the name property
console.log(bird.name); // 'mockingjay'

// bird has the sayHi method
bird.sayHi(); // 'Hi, I am mockingjay'

// You can verify that the sayHi method is on its __proto__ and is not an own property
console.log(Object.hasOwnProperty(bird.sayHi)); // false

// check that the __proto__ of bird is Bird.prototype
console.log(Object.getPrototypeOf(bird) === Bird.prototype); // true
console.log(bird instanceof Bird); // true
