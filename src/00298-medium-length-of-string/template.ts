type LengthOfString<S extends string, A extends string[] = []> = 
  S extends `${infer V}${infer Rest}`
  ? LengthOfString<Rest, [...A, V]>
  : A['length']


//借助一个中间数组,然后递归的将原字符串的每一个字符都放到这个数组中
//最后返回这个数组的length属性,即是字符串的长度.