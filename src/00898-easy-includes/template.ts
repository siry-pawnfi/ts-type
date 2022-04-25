
type Includes<T extends readonly any[], U> = U extends T[number] ? true : false


// your answers
// type Includes<T extends readonly any[], U> = 
// T extends [infer F, ...infer R] 
//   ? U extends F 
//     ? true 
//     : Includes<R, U>
//   : false


// 你的答案
// type Includes<T extends readonly any[], U> =
//   T extends [infer A, ...infer B] ? (U extends A ? true : Includes<B, U>) : false

// type Includes<T extends readonly any[], U> =
//   Equal<T[0], U> extends true
//     ? true
//     : T extends [T[0], ...infer R]
//       ? Includes<R, U>
//       : false;

//js

// function includes(arr, pro){
//   return arr.includes(pro)
// }
