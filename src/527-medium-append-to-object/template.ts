
type AppendToObject<T extends Record<string,unknown> , U extends string, V> = {
  [P in (keyof T | U)]: P extends U ? V : T[P]
} 
//使用一个并集,进行一起遍历

// function addNewFile(obj, key,value) {
//   obj[key] = value
// }