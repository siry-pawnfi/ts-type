type TrimLeft<T extends string> = 
  T extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R>: T


//末班字符串 搭配infer