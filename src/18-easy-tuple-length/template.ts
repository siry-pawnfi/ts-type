type Length<T extends readonly any[]> = T['length'] 

type aa = Exclude<"a" | "b" | "c", "a" | "b">


//获取给定tuple的length


// function getLength(arr){

//   return arr.Length
// }


//1. 传入一个数组
//2. 直接获取器length属性