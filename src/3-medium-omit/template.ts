
// type MyOmit<T, K> = {
//   [P in keyof T as ( P extends K ? never : P)]: T[P]
// }


// type MyOmit<T, K> = {
//  [P in Exclude<keyof T,K>] : T[P]
// }


type MyOmit<T, K> = Pick<T, Exclude<keyof T,K>>

// Omit 会创建一个省略 K 中字段的 T 对象。


// type MyPick<T, K extends keyof T> = {
//   [P in K]: T[P]
// }

//Pick<T,K>从类型 T 中选择出属性 K，构造成一个新的类型。
//Exclude<T,U>从T中去除u

// JS


// function fn(obj1, arr){
//   let newObj = {}
//   for(let i in arr){
//     if(!(arr[i] in obj1)){
//       newObj[arr[i]] = '1'
//     }
    
//   }
// }
// Pick<T, Exclude<keyof T, K>>;

// type PP = Omit<Todo, 'description'>

// Pick<T, Exclude<keyof T, K>>;