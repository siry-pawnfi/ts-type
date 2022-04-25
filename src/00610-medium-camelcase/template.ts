
type CamelCase<S extends string> = 
  S extends `${infer T}-${infer Rest}`
    ? Rest extends Capitalize<Rest>
      ? `${T}-${CamelCase<Rest>}`
      : `${T}${CamelCase<Capitalize<Rest>>}`
    : S


    //字符串 infer 递归 内置CamelCase<R>将字符串的首字母大写

