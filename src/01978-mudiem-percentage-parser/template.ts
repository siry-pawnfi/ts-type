type PercentageParser<A extends string, R extends [string, string, string] = ['', '' ,'']> = 
A extends `${infer F}${infer L}`
  ? F extends '-' | '+'
    ? PercentageParser<L, [F, '' ,'']>
    : F extends '%'
      ? PercentageParser<L, [R[0], R[1], F]>
      : PercentageParser<L, [R[0], `${R[1]}${F}`, '']>
  : R