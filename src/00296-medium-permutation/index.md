```ts
type P = Permutation;
type X = Exclude
// Remember Permutation<never> => [] so P<never> => []
```



| 迭代序号  | T       | K  in K extends K(当前的分布式) | Exclude<T,K>(进入递归的union) | [K, ...P<Exclude<T, K>>] | 结果      |
| ----- | ------- |:-----------------:| ------------ | ------------------------ | ------- |
| 1     | A\|B\|C | A                 | B\|C         | [A, ...P< B \| C >]      |         |
| 1.1   | B\|C    | B                 | C            | [A,B,...P< C >]          |         |
| 1.1.1 | C       | C                 | never        | [A,B,C, ...[] ]          | [A,B,C] |
| 1.2   | B \| C  | B                 | C            | [A, C, ...P< C >]        |         |
| 1.2.1 | B       | B                 | never        | [A, C, ...[] ]           | [A,C,B] |
| 2     | A\|B\|C | B                 | A\|C         | [B, ...P< A\|C >]        |         |
| 2.1   | A\|C    | A                 | C            | [B, A ,...P< C >]        |         |
| 2.1.1 | C       | C                 | never        | [B,A,C,  ...[]]          | [B,A,C] |
| 2.2   | A\|C    | C                 | A            | [B,C, ...P< A >]         |         |
| 2.2.1 | A       | A                 | never        | [B,C,A,..[]]             | [B,C,A] |
| 3     | A\|B\|C | C                 | A\|B         | [C, ...P< A\|B >]        |         |
| 3.1   | A\|B    | A                 | B            | [C, A , ...P< B >]       |         |
| 3.1.1 | B       | B                 | never        | [C, A ,B ,...[]]         | [C,A,B] |
| 3.2   | A\|B    | B                 | A            | [C, B, ...P< A >]        |         |
| 3.2.1 | A       | A                 | never        | [C,B ,A, ...[]]          | [C,B,A] |
