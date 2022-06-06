// 键入函数PromiseAll，它接受PromiseLike对象数组，
//返回值应为Promise<T>，其中T是解析的结果数组。



declare function PromiseAll<T extends any[]>(value: readonly[...T]) : 
  Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K]}>

  //使用 keyof 来遍历数组,一般都是用T[number]来遍历,
  //=因为数组也是对象(类interface)的所以使用 keyof T遍历的时候.会吧数组的一些方法也给遍历出来
  //比如 find map reduce...


// const AR = [1,2,Promise.resolve(6)] as const

// type cl = typeof AR
// type Pc = {
//   [K in keyof cl]: cl[K]  extends Promise<infer R> ? R : cl[K]
// }