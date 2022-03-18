// new Promise((resolve,reject)=>{
//   console.log(1)
//   resolve()
// }).then(()=>{
//   console.log(2)
//   new Promise((resolve,reject)=>{
//       console.log(3)
//       resolve()
//   }).then(()=>{
//       console.log(4)
//   }).then(()=>{
//       console.log(5)
//   })
// }).then(()=>{
//   console.log(6)
// })
// ss

// new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
// }).then(() => {
//   console.log(2)
//   // 多了个return
//   return new Promise((resolve, reject) => {
//     console.log(3)
//     resolve()
//   }).then(() => {
//     console.log(4)
//   }).then(() => { // 相当于return了这个then的执行返回Promise
//     console.log(5)
//   })
// }).then(() => {
//   console.log(6)
// })


// new Promise((resolve, reject) => {
//   console.log(1)
//   resolve()
// }).then(() => {
//   console.log(2)
//   new Promise((resolve, reject) => {
//     console.log(3)
//     resolve()
//   }).then(() => {
//     console.log(4)
//   }).then(() => {
//     console.log(5)
//   })
// }).then(() => {
//   console.log(6)
// })

// new Promise((resolve, reject) => {
//   console.log(7)
//   resolve()
// }).then(() => {
//   console.log(8)
// })//1 7 2 3  8 4 6 5

// sss


async function async1() {
  console.log(1);
  await async2();
  console.log(2);
}
async function async2() {
  console.log(3);
}
// console.log(4);
// setTimeout(function () {
//   console.log(5);
// });
// async1()
// new Promise(function (resolve, reject) {
//   console.log(6);
//   resolve();
// }).then(function () {
//   console.log(7);
// });
// console.log(8);
// //4 1 3 6 8 2 7 5 

// //上面等价 === 
// console.log(4); // 同步
// setTimeout(function () {
//   console.log(5); // 异步：宏任务 setTimeout
// });

// // async1函数可转换成
// console.log(1) // 同步
// new Promise((resolve, reject) => {
//   console.log(3) // 同步
//   resolve()
// }).then(() => { // 异步：微任务 then1
//   console.log(2)
// })
// // async1函数结束

// new Promise(function (resolve, reject) {
//   console.log(6); // 同步
//   resolve();
// }).then(function () { // 异步：微任务 then2
//   console.log(7);
// });
// console.log(8); // 同步