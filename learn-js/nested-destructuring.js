// let person = {
//   name:'Matt',
//   job:{
//     // title:'shgj'
//   }
// }

// let personCopy = {};

// ({
//   name:personCopy.name,
//   job:personCopy.job,

// } = person);

// let {job:{title}} = person


// console.log(person)

let person = {
  name:'Matt',
  age:27
}


function a(foo,{name,age},bar) {
  console.log(arguments)
  console.log(name,age)
}
