type False = false | 0 | [] | {[K:string]: never} | ''

//使用数组的T[number]的遍历方式
// type AnyOf<T extends readonly any[]> = 
//  T[number] extends False ? false : true


//使用递归的方式
type AnyOf<T extends readonly any[]> = 
 T extends [infer F, ...infer Rest]
  ? F extends False
    ? AnyOf<Rest>
    : true
  : false

