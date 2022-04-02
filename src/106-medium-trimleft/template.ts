type TrimLeft<T extends string> = 
  T extends `${' ' | '\n' | '\t'}${infer R}` ? TrimLeft<R>: T


//infer在推断字符穿的时候 如果开头是' ' | '\n' | '\t' 这个union的话 R就为原字符串剩下的部分.

//模板字符串 搭配infer 可以对字符串类型进行一个遍历操作.

