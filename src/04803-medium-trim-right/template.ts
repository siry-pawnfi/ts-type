type TrimRight<S extends string> = 
  S extends `${infer R}${' ' | '\n' | '\t'}`
  ? TrimRight1<R>
  : S