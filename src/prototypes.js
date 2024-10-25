function Bird(name) {
  this.name = name;
}

Bird.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

const bird = new Bird("mockingjay");

bird.sayHi(); // 'Hi, I am mockingjay'

// what is the prototype property of Bird?
// - it's just an object! with our sayHi method on it, and the constructor function
// the constructor method on the prototype is a circular reference that points back to our Bird function!
console.log(Bird.prototype.constructor === Bird); // true

// but what is the __proto__ of Bird?
// - the __proto__ of Bird is the Function prototype!
console.log(Object.getPrototypeOf(Bird) === Function.prototype);

// what is the prototype of bird?
// - bird does not have a prototype property because it is not a function
console.log(bird.prototype); // undefined
console.log(bird.prototype === Bird.prototype); // false

// but objects have a __proto__ !
console.log(Object.getPrototypeOf(bird) === Bird.prototype); // true

// the __proto__ of Bird.prototype is the Object prototype!
console.log(Object.getPrototypeOf(Bird.prototype) === Object.prototype); // true