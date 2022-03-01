
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

/**
 * 属性K 应该是T中的的属性K extends keyof T
 * 遍历对象,取出T中属性K的值,赋值给 P(遍历K的每一项)
 */

//从类型 T 中选择出属性 K，构造成一个新的类型。
// function getObj(obj, pros) {
//   let temObj = {}
//     pros.map(item => {
//       if(item in obj){
//         temObj[item] = obj[item]
//       }
//     })
//   return temObj
// }

// getObj({title:'ccc'},['title'])