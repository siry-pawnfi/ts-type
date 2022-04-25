//数组展平
type Flatten<T extends unknown[]> = 
  T extends [infer F,...infer Rest]
    ? F extends unknown[]
      ? [...Flatten<F>,...Flatten<Rest>]
      : [F,...Flatten<Rest>]
    : []


//需要遍历原数组的每一项,对每一项进行是否是数组的判断.是的话进入递归,不是的话后面的再继续判断

// function flatDeep(arr, d = Infinity) {
//   // arr.flat(Infinity)
//   //强行使用[...arr]展开运算符的话.需要寄一个flat(1)
//   return d > 0 ?
//     arr.reduce((acc,val) => [...acc, Array.isArray(val) ? flatDeep(val,d - 1) : val].flat(1),[])
//     : arr.slice()

//     //使用concat会自动解出来一层flat
//     // return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
//     //             : arr.slice();
// }
// var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

// console.log(flatDeep(arr1,Infinity))