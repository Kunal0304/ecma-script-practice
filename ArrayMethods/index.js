//The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const arrayconcat1 = ["a", "b", "c"];
const arrayconcat2 = ["d", "e", "f"];
const arrayconcat3 = arrayconcat1.concat(arrayconcat2);

console.log(arrayconcat3, "concat");

///////////////////////////////////////////////////////////////////////////////////////////////

//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

const arraycopyWithin1 = [1, 2, 3, 4, 5, 6];

// copy to index 0 the element at index 3
console.log(arraycopyWithin1.copyWithin(0, 3, 4), "copyWithin");
// expected output: Array [3, 1, 2, 3, 4, 5, 6]

// copy to index 1 all elements from index 3 to the end
console.log(arraycopyWithin1.copyWithin(1, 3), "copyWithin");
// expected output: Array [3, 3, 4, 5, 6, 5, 6]

///////////////////////////////////////////////////////////////////////////////////////////////

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const arrayentries1 = ["a", "b", "c"];

const iterator1 = arrayentries1.entries();

console.log(iterator1.next().value, "entries");
// // expected output: Array [0, "a"]

// console.log(iterator1.next().value, "entries");
// // expected output: Array [1, "b"]
// console.log(iterator1.next().value,"entries");

// for (let element of iterator1) {
//   console.log(element,"entriessss");
// }
// expected output: Array [0,"a"][1, "b"][2,"c"] if no next method run before the for of

for (let [index, value] of iterator1) {
  console.log(index, value, "entriessss");
}
// expected output: Array 0 a 1 b 2,c if no next method run before the for of

///////////////////////////////////////////////////////////////////////////////////////////////

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

const isBelowThreshold = (currentValue) => currentValue < 60;

const arrayevery1 = [1, 30, 39, 29, 10, 13];

console.log(arrayevery1.every(isBelowThreshold), "every");
console.log(
  arrayevery1.every((e) => e < 10),
  "every"
);

//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

const arrayfill = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(arrayfill.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(arrayfill.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(arrayfill.fill(6));
// expected output: [6, 6, 6, 6]

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////

// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

const arrayfind1 = [5, 1, 8, 130, 44];

const found = arrayfind1.find((element) => element > 10); //return type undefine

console.log(found, "find");

//////////////////////////////////////////////////////////////////////////////////////////////////

// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

const arrayfindIndex = [5, 12, 18, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(arrayfindIndex.findIndex(isLargeNumber), "findIndex");

////////////////////////////////////////////////////////////////////////////////////////////////

//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat(), "flat");
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2), "flat");
// expected output: [0, 1, 2, [3, 4]]

const arr3 = [0, 1, 2, [[3, 4]]];

console.log(arr3.flat(2), "flat");

const arr4 = [0, 1, 2, [[[[[3, 4]]]]]];

console.log(arr4.flat(Infinity), "flat");

//////////////////////////////////////////////////////////////////////////////////////////

// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1 (arr.map(...args).flat()), but slightly more efficient than calling those two methods separately.

const arrflat = [1, 2, 3, 4];

arrflat.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arrflat.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arrflat.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

///////////////////////////////////////////////////////////////////////////////////////////////////

//The forEach() method executes a provided function once for each array element.

const arrayforeach = ["a", "b", "c"];

arrayforeach.forEach((element) => console.log(element), "forEach");

////////////////////////////////////////////////////////////////////////////////////////////////////

// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const arrayincludes = [1, 2, 3];

console.log(arrayincludes.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

////////////////////////////////////////////////////////////////////////////////////////////////

// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// expected output: 1

// start from index 2
console.log(beasts.indexOf("bison", 2));
// expected output: 4

console.log(beasts.indexOf("giraffe"));
// expected output: -1

/////////////////////////////////////////////////////////////////////////////////////////////////////

// The Array.isArray() method determines whether the passed value is an Array.

Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
Array.isArray(undefined); // false
Array.isArray(false); //false
Array.isArray(true); //false
Array.isArray("hello"); //false
Array.isArray({ __proto__: Array.prototype }); //false
Array.isArray(null);

const a = Array.isArray(null);

console.log(a, "array");
////////////////////////////////////////////////////////////////////////////////////////////////////

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const elements = ["Fire ", "Air ", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

console.log(elements.join(",+        - +"));

////////////////////////////////////////////////////////////////////////////////////////////////

//The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

const arraykeys = ["a", 1465, "b", "c", 5, , 45, 7];
const iterator = arraykeys.keys();

for (const key of iterator) {
  console.log(key);
}
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]

//////////////////////////////////////////////////////////////////////////////////////////////////

// The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

Array.of(7); // [7]
Array(7); // array of 7 empty slots

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]

//////////////////////////////////////////////////////////////////////////////////////////////////

// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

//////////////////////////////////////////////////////////////////////////////////////////////

// The push() method adds one or more elements to the end of an array and returns the new length of the array.

const animal = ["pigs", "goats", "sheep"];

const count = animal.push("cows");
console.log(count);
// expected output: 4
console.log(animal);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animal.push("chickens", "cats", "dogs");
console.log(animal);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

////////////////////////////////////////////////////////////////////////////////////////////////

// reduce

const arrayreduce = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arrayreduce.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

/////////////////////////////////////////////////////////////////////////////////////////////////

// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

const arrayreverse = ["one", "two", "three"];
console.log("array1:", arrayreverse);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = arrayreverse.reverse();
console.log("reversed:", reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", arrayreverse);
// expected output: "array1:" Array ["three", "two", "one"]

/////////////////////////////////////////////////////////////////////////////////////////////////////

// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const arrayshift = [1, 2, 3];

const firstElement = arrayshift.shift();

console.log(arrayshift);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1

/////////////////////////////////////////////////////////////////////////////////////////////////////

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

/////////////////////////////////////////////////////////////////////////////////////////////////

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [1, 4, 3, 8, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output:

const fruits = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}

console.log(checkAvailability(fruits, "Banana")); // false
console.log(checkAvailability(fruits, "banana")); // true

/////////////////////////////////////////////////////////////////////////////////////////////////////

// sort

const month = ["March", "Jan", "Feb", "Dec"];
month.sort();
console.log(month);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]

const persons = [
  { id: 3, name: "elon" },
  { id: 7, name: "vitalik" },
  { id: 4, name: "dario" },
  { id: 2, name: "brian" },
];

console.log(persons.sort((a, b) => a.id - b.id));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(3, 2, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

////////////////////////////////////////////////////////////////////////////////////////////////////

// The group() method groups the elements of the calling array according to the string values returned by a provided testing function. The returned object has separate properties for each group, containing arrays with the elements in the group.

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

// let results = inventory.group(({ type }) => type); // pending............

function solve(arr,r){
    if(r== 0) return arr;
    for(let i=0 ; i<r ; i++){
      let element = arr.pop();
      arr.unshift(element)
    }
    return arr;
}
console.log(solve([44,1,22,111],5),"cool")