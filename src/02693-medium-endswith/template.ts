
type EndsWith<T extends string, U extends string> = 
  T extends `${infer _}${U}`
    ? true
    : false