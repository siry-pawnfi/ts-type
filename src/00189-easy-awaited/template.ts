type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U>
  ? U extends Promise<unknown>
   ? MyAwaited<U>   //这里相当于进行递归操作,可以处理嵌套的prommise
   : U
  : never


  //这种不能处理嵌套的orimise
  // type MyAwaited<T> = T extends Promise<infer K> ? K : never

  //any  unknow区别
  // 1. unknow类型更加严格比any,对any类型是不进行类型检查的.但是对对unknow会进行某种检查
  // 2. unknow类型只能分配给unknow类型和any类型

  let a:any 
  a = 'c'
  a = 2 
  let b:number = a  //ok


  let aa:unknown 
  aa= 'c'
  aa = 2 
  let bb:any = aa  // ok
  let cc: number = bb //ok

