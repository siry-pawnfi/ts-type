type TrimLeft<T extends string> = 
  T extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R>: T


//模板字符串 搭配infer 可以对字符串类型进行一个遍历操作.

