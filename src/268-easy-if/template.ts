// type If<C extends true | false, T, F> = C extends null ? never : C extends true ? T : F
// type If<C extends boolean, T, F> =  C extends true ? T : F
type If<C extends true | false, T, F> =  C extends true ? T : F



type AA = 'cc' extends boolean ? '1' : '2'

type A = If<true, 'a', 'b'>  // expected to be 'a',z


type B = If<null, 'a', 'b'> // expected to be 'b'


//限制C为true或者false  

//js

// function judge(c, t, f){
//   return c ? t : f
// }