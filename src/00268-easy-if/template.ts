// type If<C extends boolean, T, F> =  C extends true ? T : F
type If<C extends boolean , T, F> = C extends true ? T : F

//类型 boolean 实际上就是联合类型 true | false(布尔字面量) 的别名。

// type AA = 'cc' extends boolean ? '1' : '2'

// type A = If<true, 'a', 'b'>  // expected to be 'a',z


// type B = If<null, 'a', 'b'> // expected to be 'b'


//限制C为true或者false  

//js

// function judge(c, t, f){
//   return c ? t : f
// }

// 1. strictNullChecks没有开启的话
// 如果一个值可能是 null 或者 undefined，
// 它依然可以被正确的访问，或者被赋值给任意类型的属性。


