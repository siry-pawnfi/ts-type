
type MyCapitalize<S extends string> = 
  S extends `${infer T}${infer R}`
    ? `${Uppercase<T>}${R}`
    : S


