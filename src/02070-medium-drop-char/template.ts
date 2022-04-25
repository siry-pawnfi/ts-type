type DropChar<S, C extends string> = 
  S extends `${infer F}${infer R}`
    ? F extends C
      ? DropChar<R,C>
      : `${F}${DropChar<R,C>}`
    : S


//第一和匹配为可分配,前面的不保留,就让后面的进行DropChar的递归
//如果前一个不匹配,就让前面的保留,后面的递归