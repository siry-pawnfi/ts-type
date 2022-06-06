type IsNever<T extends unknown> =
  [T] extends [never]
    ? true
    : false

//条件分布类型中, 如果T为never 则在T extends  never中  永远都不会进行分配.

//对于类型为never时
//不能直接使用 T extends never
//使用数组的方式


type MakesSense = IsNever<never>// never
type MakesSense2 = never extends never ? true : false// true
