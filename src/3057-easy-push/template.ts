
type Push<T extends  unknown[], U> = [...T, U]


// export type Equal<X, Y> =
//   (<T>() => T extends X ? 1 : 2) extends
//   (<T>() => T extends Y ? 1 : 2) ? true : false


//js
// function push1(arr, item){
//   // arr.push(item)
//   return [...arr, item]
// }

//1. 结构原数组,添加新的项

