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
//asd

// function getType(args){
//   return [...args]
// }


// get(getType, 1,2,3)


// interface Option {
//   a: string
//   b: string
//   c: number
// }

// type AVC<T extends Option> = {
//   [P in keyof T]: T[P]
// }

// const aaa:AVC<Option> = {
//   a: 'cc',
//   b: 'cc',
//   c: '2'
// }

// type CCC = AVC<Option>

