// type Chainable<Options = {}> = {
//   option<K extends string, V>(key: K, value: V): Chainable<Options & {[S in K] : V}>
//   get(): Options
// }

// 
// your answers
// type Not<T, K> = T extends K ? never : T;
// interface Chainable {
//   option<T extends string, U>(key: Not<T, keyof this>, value: U): this & { [K in T]: U };
//   get(): Omit<this, 'option' | 'get'>
// }
// Not<T, keyof Options>

//不使用this进行的改造
interface Chainable<Options = {}> {
  option<T extends string, U>(key: Exclude<T, keyof Options>, value: U): Chainable<Options & {[S in T] : U}>;
  get(): Options
}



/**
 * - this
 * -  Exclude  从联合类型中 排除 部分联合类型
 */


// interface A {
//   name: string,
//   age:number
// }

// type CZ = Exclude<keyof A , never>