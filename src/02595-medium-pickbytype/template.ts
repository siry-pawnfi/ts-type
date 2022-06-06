
type PickByType<T, U> = 
  {
    [P in keyof T as T[P] extends U ? P : never]: T[P] 
  }


  // type Ar = Exclude<string|number, number>