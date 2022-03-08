
//T, K传入联合类型
type Exclude2<T, K> = T extends K ? never : T 

//T接口,K联合类型
type Omit2<T, K extends keyof T> = {
  [P in Exclude2<keyof T, K>] : T[P]
} 
   
type MyReadonly2<T, K extends keyof T = never> = 
{
  readonly [P in K] : T[P]
} & {
  [P in keyof Omit<T, K>]: T[P]
}

type CCC = MyReadonly2<Todo1>
interface Todo1 {
  title: string
  description?: string
  completed: boolean
}



// type MyReadonly2<T, K extends keyof T> ={ [key in Exclude<keyof T, K>]: T[key] } & { readonly [key in K]: T[key]; }


// K extends null ?
// {
//   readonly [P in keyof T]: T[P];
// }
// :

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

type AA = Readonly<{name:string}>