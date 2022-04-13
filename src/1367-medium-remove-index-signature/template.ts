type RemoveIndexSignature<T> = {
  [K in keyof T as K extends `${infer P}` ? P : never] : T[K]
}

/**
 * as Key extends `${infer ConcreteKey}` ? ConcreteKey : never
 * 如果被重新映射的键是字符串文本(或者特定的字符串而不是通用字符串),则保留键(通过返回原始键)
 * 否则过滤掉(返回never)
 * 
 * Key extends `${infer ConcreteKey}`
 * 模板文字是基于字符串文字类型构建的.这将是从中推断的唯一类型.而不是通用字符串.
 * 字符串只能扩展类型字符串和任何AFAIK,因此条件会导致错误并过滤掉通用字符串类型
 * 
 * (通用字符串 不能 extends  魔板字符串.)
 */

//当键为never时,会过滤掉

// type RemoveIndexSignature<T> = {
//   [ K in keyof T as string extends K ? never : number extends K ? never : K ] : T[K]
// }



type Kl = 'asd' extends string ? true : false  //true
type K2 = 'asd' extends `${infer S}` ? S : false  //true
