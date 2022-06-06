
type TrimLeft1<S extends string> = 
  S extends `${' ' | '\n' | '\t'}${infer R}`
  ? TrimLeft1<R>
  : S
  
type TrimRight1<S extends string> = 
  S extends `${infer R}${' ' | '\n' | '\t'}`
  ? TrimRight1<R>
  : S

type Trim<S extends string> = TrimRight1<TrimLeft1<S>>

