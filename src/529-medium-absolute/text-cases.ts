type Absolute<T extends number | string | bigint> = 
  `${T}` extends `-${infer R}` 
    ? R
    : `${T}`

//模板字符串配合infer进行推断