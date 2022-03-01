
// type First<T extends any[]> = T extends [] ? never : T[0]

//T[number]遍历数组生成联合类型
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

type First<T extends any[]> = T extends [infer First, ...infer Reset] ? First : never








type aa = [1,2,3]

type cc = aa[number]  // 3 | 1 | 2