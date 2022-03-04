type MyParameters<T extends (...args: any[]) => any> = 
  T extends (...args: infer P) => any
  ? P
  : never


 const baz = (): void => {}
 type AAAA =  MyParameters<typeof baz>

// JS


// function get(callbac,...args){
//   return callbac(args)
// }


// function getType(args){
//   return [...args]
// }


// get(getType, 1,2,3)



