
type IsUnion<T, U = T> = 
  T extends any
    ? [U] extends [T]
      ? false
      : true
    :false


//联合类型的分发特性,当联合类型作为泛型的时候,会触发分发特性
//当联合类型使用[]包装以后,会失去分发特性.

/**
 * T extends any 触发分布特性
 * 当T为 a | b时,T extends any就会被翟拆分为
 * a extends any  |  b extends any
 * 此时下面的T就为
 * [U] extends [T]
 * 分解为: [a|b] extends [a]  [a|b] extends [b] 如果t为union肯定不成立
 * 返回true
 */