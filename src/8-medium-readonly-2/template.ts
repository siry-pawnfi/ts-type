
   
// type MyReadonly2<T, K extends keyof T> =
// {
//   readonly [P in K] : T[P]
// } & Omit<T,K>


// type MyReadonly2<T, K extends keyof T> ={ [key in Exclude<keyof T, K>]: T[key] } & { readonly [key in K]: T[key]; }

// 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。
// K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。

//keyof可以把interface转为 union
//遍历unio使用  in
//遍历数组 使用 T[number]
//遍历接口使用 先用keyof将属性转为联合类型,然后再用in遍历联合类型

// function setReadly(T, K){
  // let flag = false
  // if(!k) falg = true
//   for(let pro in T){
//     if(K.includes(T[pro]) || falg){
//       T[pro] = 'readly'
//     }
//   }
// }

// 1.遍历对象,找到需要设置readonly的值