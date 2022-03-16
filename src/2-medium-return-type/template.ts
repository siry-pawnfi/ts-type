
   
type MyReturnType<T extends (...args: any) => any> = 
  T extends (...args: any) => infer K 
  ? K
  : any

//实现ReturnType<T>


// T extends (...args: any) => infer K 
//主要是满足 传入的函数是有参数的

//js
// function getFnReturnType(fn) {
//   return fn()
// }

// function fn() {
//   let type = 'string'
//   return type
// }

// type S = ReturnType<() => string>

// type L = typeof fn1
// type AA = MyReturnType<L>

// const fn1 = (v: boolean, w: any) => v ? 1 : 2