
type Permutation<T, U = T> =
  [T] extends [never]
    ? []
    : T extends any
      ? [T, ...Permutation<Exclude<U,T>>]
      : never

//U用来保存T的副本,主要是用来做Exclude操作的

/**
 *
 * union类型中使用extends,会进行分布式的遍历,
 * 参考 https://github.com/type-challenges/type-challenges/issues/614
 */

/**
 * Conditional Types(条件类型)
//  SomeType extends OtherType ? TrueType : FalseType;
 * 当左侧可以分配给右侧的时候,进入? 分支.不然进入: 分支


 如果我们在 ToArray 传入一个联合类型，这个条件类型会被应用到联合类型的每个成员：
 */

 type ToArray<Type> = Type extends any ? Type[] : never;
 
 type StrArrOrNumArr = ToArray<string | number>;  //string[] | number[]