
type StringToUnion<T extends string> = 
  T extends `${infer F}${infer Rest}`
    ? F | StringToUnion<Rest>
    : never


//字符串转为union
//infer 递归 