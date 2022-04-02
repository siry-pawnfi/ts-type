type Replace<S extends string, From extends string, To extends string> = 
From extends ''
 ? S
  :
  S extends `${infer Rest}${From}${infer _}`
    ? `${Rest}${To}${_}`
    : S
