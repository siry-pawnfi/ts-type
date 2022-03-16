type MyExclude<T, U > = T extends U ? never : T



//从联合类型T中排除U的类型成员，来构造一个新的类型

// function excludePrototype(t, u) {
//   for(let pro in u){
//     if(pro in t){
//       delete t[pro]
//     }
//   }
//   console.log(t)
//   return t
// }


//1. 遍历U的每一个属性看看是不是在t中 | (遍历T的每一个属性看看是不是在U中)
//2. 将在T中的属性删除


//for in遍历属性   通常用来遍历对象

//for of遍历数组的值  通常用来遍历数组