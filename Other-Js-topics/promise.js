// function createPromise() {
//     return new Promise(function (resolve,reject) {
//         setTimeout(() => {
//             const err= true
//             if (!err) {
//                 // console.log("your promise has been resolve")
//                 resolve(" -: resolve function running");
//             } else {
//                 // console.log("your promise is not resolve plzzz check some error")
//                 reject(" -: error Function running");
//             }
//         },2000)
//     })
// }

// createPromise().then(function (resolve) {
//     console.log("resolve Sucess" + resolve);
// }).catch(function (error) {
//     console.log("err found"+ error)

// })

///////////////////////////////////////////////////////////////////////////////////

// Promise.resolve(1).then(2).then((value)=>console.log(value)); // prints 1
// Promise.reject("hello")
//   .then(() => "hello", 2)
//   .then(console.log, console.log);

// createPromise()
//   .then((value) => {
//     return value + " and bar 01 ";
//   })
//   .then((value) => {
//     return value + " and bar again 02 ";
//   })
//   .then((value) => {
//     return value + " and again 03 ";
//   })
//   .then((value) => {
//     return value + " and again 04 "; // then multipul time running in over program
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err + " error 01");
//     return err + " error 01"
//   })
//   .catch((err) => {
//     console.log(err + " error 02"); //catch only one time running at a time
//     return err + " error 02";
//   });

////////////////////////////////////////////////////////////////////////////////////////////////////

const p1 = new Promise((resolve, reject) => resolve("p1 is resolve"));
const p2 = new Promise((resolve, reject) => resolve("p2 is reject"));
const p3 = new Promise((resolve, reject) => resolve("p3 is resolve"));
const p4 = new Promise((resolve, reject) => resolve("p4 is resolve"));

// const all = Promise.all([
//   p1.catch((err) => err),
//   p2.catch((err) => err),
//   p3.catch((err) => err),
//   p4.catch((err) => err),
// ])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// console.log(all)
//   const q1 = fetch("https://jsonplaceholder.typicode.com/todos/");
//   const q2 = new Promise("https://jsonplaceholder.typicode.com/tods/1");
//   const q3 = new Promise("https://jsonplaceholder.typicode.com/todos/1");

// const texts = Promise.all(
// [q1,q2,q3].map((url) => {
//     const resp = fetch(url);
//     // return resp.text();
//   })
// ).then((value)=>console.log(value));

// const q1 = new Promise((resolve,reject)=>{
// const aa = fetch("https://jsonplaceholder.typicode.com/todos/1").then((val)=>console.log(val));
// resolve(aa)
// else reject("something worng")
// })
// const q2 = new Promise("https://jsonplaceholder.typicode.com/tods/1");
// const q3 = new Promise("https://jsonplaceholder.typicode.com/todos/1");

// Promise.all([q1,q2,q3]).then((value)=>console.log(value))

///////////////////////////////////////////////////////////////////////////////////////////////////////

// const getData = async () => {
//   let res = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users"),
//     fetch("https://jsonplaceholder.typicode.com/post"),
//     fetch("https://jsonplaceholder.typicode.com/albums"),
//   ]);
//   const data = await Promise.all(res.map((r) => r.json()));
//   console.log(data);
// };
// getData();

///////////////////////////////////////////////////////////////////'''''''''''''''''//////////

// async function Demo() {
//   return "cool";
// }
// console.log(Demo())
// const func01= async()=>"hello";
// func01().then((val)=>console.log(val));


// async function dummy() {
  
//   setTimeout(() => {
//     console.log("1000 mili second")
//   }, 1000);
//   await console.log("a")
//   console.log("b")
//   console.log("c")
// }
// dummy()
// console.log("d")
// console.log("e")

////////////////////////////////////////////////////////////////////////////////////////

arr=[1,2,3,4,5,6,7,8,9]

const aa=arr.reduce((per,curr)=> per + curr ,5)
console.log(aa)

//////////////////////////////////////////////////////////////////////////////////

cd 