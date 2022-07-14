const user = [
  { id: 1, fname: "rahul", lname: "choudhary" },
  { id: 2, fname: "kunal", lname: "rokhle" },
  { id: 3, fname: "dipesh", lname: "rokhle" },
  { id: 4, fname: "prince", lname: "kushwah" },
  { id: 5, fname: "alok", lname: "choudhary" },
  { id: 6, fname: "khushboo", lname: "patel" },
  { id: 7, fname: "Ankit", lname: "choudhary" },
];
const comments = [
  { id: 1, text: "Great job" },
  { id: 2, text: "nice job" },
  { id: 3, text: "Cool ,thanks" },
  { id: 4, text: "nice job bro" },
  { id: 5, text: "well done" },
];

/////////////////////////////////////////////////////////////////////////////////////////////////
// const b = user.filter((k) => comments.map((l) => l.id).includes(k.id));
//  console.log(b);

////////////////////////////////////////////////////////////////////////////////////////////////////
// const a= user.filter((e)=>!comments.some(i=>e.id == i.id))
// const res1 = user.filter(
//   (page1) => !comments.find((page2) => page1.id === page2.id)
// );
// console.log(res1);
// console.log(a);

// const cmt=comments.map((k)=> k).filter((j)=>j.id===4)

////////////////////////////////////////////////////////////////////////////////////////

//find comments in id=5 person
// const cmt = comments.filter((j) => j.id === 4).map((k)=>k.text);
// console.log(cmt)

/////////////////////////////////////////////////////////////////////////////////////////////////

// alok comments filterOut by its name
// const  arr= user.filter((a)=>a.fname==="alok").map((b)=>comments.filter((c)=>c.id===b.id)).flat().map((d)=>d.text)
// console.log(arr)

/////////////////////////////////////////////////////////////////////////////////////////////////////

var start = new Date().getTime();

function modifiedData(user) {
  const newData = {};
  user.map((i) => {
    if (!newData[i.lname]) newData[i.lname] = [];

    newData[i.lname].push(i);
    delete i.lname;
    // console.log(del);
  });
  return newData;
}
console.log(modifiedData(user));
var end = new Date().getTime();
var dur = end - start;
console.log(dur, "old");

//////////////////////////////////////////////////////////////////

const obj = {};
user.map((b) => {
  if (!obj[b.lname]) obj[b.lname] = [];
  obj[b.lname].push(b);
});
// console.log(obj);

////////////////////////////////////////////////////////////////////

//   var start = new Date().getTime();
// const obj2 = {};
// user.map(
//   (a) =>
//     (!obj2[a.lname] && (obj2[a.lname] = []) && obj2[a.lname].push(a)) ||
//     (obj2[a.lname] && obj2[a.lname].push(a))
// );
// console.log(obj2);
//   var end = new Date().getTime();
//   var dur = end - start;
//   console.log(dur)

//////////////////////////////////////////////////////////////////////////////////////////////////////

