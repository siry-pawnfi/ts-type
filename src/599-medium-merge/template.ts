
type Merge<F, S> = {
  [K in (keyof F | keyof S)]: K extends keyof S ? S[K] : K extends keyof F ? F[K] : never
}




//关于interface和type进行扩展的问题