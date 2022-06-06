type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [K in T[number]]: K
}



let str = 'ss'
type s = typeof str  //string

const strConst = 'ccc'
type sc = typeof strConst  //'ccc'

//keyof array ==> 索引

// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// type sss =  TupleToObject<typeof tuple>

//加上 as const 之后 就不能通过 aa[0] = 4 修改了
// const aa = [1,2] as const

// type c = typeof aa


//1. array里面的key是不是string类型 或者number 或者symbol

// 1.遍历一个array  T[number]
// 2.字面量类型