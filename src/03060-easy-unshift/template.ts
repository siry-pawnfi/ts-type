type Unshift<T extends unknown[], U> = [U, ...T]


// JS

// function unshift(arr, item){
//   // return arr.unshift(item)
//   return [item, ...arr]
// }