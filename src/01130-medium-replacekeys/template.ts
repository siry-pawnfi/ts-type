
// type ReplaceKeys<U, T, Y> = 
//   U extends any 
//     ? {[P in keyof U]: P extends T ? P extends keyof Y? Y[P]: never : U[P]}
//     : never
  
//利用联合类型的分布特性
//U  extends any 触发这个分布特性

type ReplaceKeys<U, T, Y> = 
  {//这里直接使用也会触发
    [P in keyof U]: P extends T ? P extends keyof Y ? Y[P] : never: U[P]
  }