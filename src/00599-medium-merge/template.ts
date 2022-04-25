
type Merge<F, S> = {
  [K in (keyof F | keyof S)]: K extends keyof S ? S[K] :  K extends keyof F ? F[K] : never
}

//在前面的不会被覆盖,后面的会被覆盖
type Foo1 = {
  a: number;
  b: string;
};
type Bar1 = {
  b: number;
  c: boolean;
};


type Sc = Merge<Foo1, Bar1>

//关于interface和type进行扩展的问题