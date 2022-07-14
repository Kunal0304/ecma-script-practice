// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };
const o4 = { c: 4 };

const obj = Object.assign(o1, o2, o3, o4);

console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, target object itself is changed.

/////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"

////////////////////////////////////////////////////////////////////////////////////////

// The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

const objectdefineProperty = {};

Object.defineProperty(objectdefineProperty, "property1", {
  value: 42,
  writable: true,
});

objectdefineProperty.property1 = 77;
// throws an error in strict mode

console.log(objectdefineProperty.property1);
// expected output: 77

/////////////////////////////////////////////////////////////////////////////////////////////

// The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.

const objectdefineProperties = {};

Object.defineProperties(objectdefineProperties, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(objectdefineProperties.property1);
// expected output: 42

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.

const objectentries = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(objectentries)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"

////////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

const objfreeze = {
  prop: 42,
};

Object.freeze(objfreeze);

objfreeze.prop = 33;
// Throws an error in strict mode
objfreeze.newkey = "added";
// not added any property
console.log(objfreeze.prop);
// expected output:

//////////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.fromEntries() method transforms a list of key-value pairs into an object.

const fromEntries = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);

const objfromEntries = Object.fromEntries(fromEntries);

console.log(objfromEntries);
// expected output: Object { foo: "bar", baz: 42 }

/////////////////////////////////////////////////////////////////////////////////////////////////

//The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.

const getOwnPropertyDescriptors = {
  property1: 42,
};

const descriptors1 = Object.getOwnPropertyDescriptors(
  getOwnPropertyDescriptors
);

console.log(descriptors1.property1.writable);
// expected output: true

console.log(descriptors1.property1.value);
// expected output: 42


//////////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

const prototype1 = {};
const object1 = Object.create(prototype1);

console.log(Object.getPrototypeOf(object1) === prototype1);
// expected output: true

////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.

const hasOwn = {
  prop: "exists",
};

console.log(Object.hasOwn(hasOwn, "prop"));
// expected output: true

console.log(Object.hasOwn(hasOwn, "toString"));
// expected output: false

console.log(Object.hasOwn(object1, 'undeclaredPropertyValue'));
// expected output: false

////////////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.is() method determines whether two values are the same value.

Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
// Object.is(window, window);        // true
const fo = { a: 1 };
const ba = { a: 1 };
Object.is(fo, fo);              // true
Object.is(fo, ba);              // false
console.log(Object.is(fo, ba),"hello bhai");

////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).

const isExtensible = {};

console.log(Object.isExtensible(isExtensible));
// expected output: true

isExtensible.name = "kunal";
console.log(isExtensible);

Object.preventExtensions(isExtensible); // this method is only edit exits property not add extra property
isExtensible.age = 55;
isExtensible.name = "ram";
console.log(isExtensible);

console.log(Object.isExtensible(isExtensible));
// expected output: false

//////////////////////////////////////////////////////////////////////////////////////////////

// The Object.isFrozen() determines if an object is frozen.


const isFrozen = {
  property1: 42,
};

console.log(Object.isFrozen(isFrozen), "isFrozen");
// expected output: false

Object.freeze(isFrozen);  // this methods helps object property not add or delete  and change status to main object (isFrozen)
const vacuouslyFrozen = Object.preventExtensions({});

console.log(Object.isFrozen(vacuouslyFrozen), "isFrozen vacuouslyFrozen");
// expected output: true
console.log(
  Object.isFrozen(Object.preventExtensions({})),
  "isFrozen preventExtensions"
);

console.log(Object.isFrozen(isFrozen), "isFrozen");
// expected output: true

console.log(Object.isFrozen(isFrozen), "isFrozen");
// expected output: false

////////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable

const seal = {
  property1: 42,
};

Object.seal(seal);
seal.property1 = 33;
seal.name = "kunal";
console.log(seal.name);
// expected output: undefined
console.log(seal.property1);
// expected output: 33

delete seal.property1; // cannot delete when sealed
console.log(seal.property1);
// expected output: 33

///////////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.isSealed() method determines if an object is sealed.

const isSealed = {
  property1: 42,
};

console.log(Object.isSealed(isSealed));
// expected output: false

Object.seal(isSealed);

console.log(Object.isSealed(isSealed));
// expected output: true

/////////////////////////////////////////////////////////////////////////////////////////////////

//The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

const keys = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.getOwnPropertyNames(keys));
// expected output: Array ["a", "b", "c"]
console.log(Object.keys(keys));
// expected output: Array ["a", "b", "c"]

/////////////////////////////////////////////////////////////////////////////////////////////////////

// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)

const values = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(values));
// expected output: Array ["somestring", 42, false]


