
type FindDiffKey<K1,K2> = Exclude<K1 | K2, K2> |  Exclude<K1 | K2, K1>

// type Diff<O, O1> = {
//    [P in FindDiffKey<keyof O,keyof O1>]: P extends keyof O ? O[P] : P extends keyof O1 ? O1[P] : never
// }

type Diff<O,O1> = 
Exclude<keyof O, keyof O1> extends never 
  ? Pick<O1,Exclude<keyof O1,keyof O>>
  : Pick<O,Exclude<keyof O,keyof O1>>