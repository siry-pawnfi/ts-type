type KebabCase<S extends string> = 
  S extends `${infer T}${infer R}`
    ? R extends Uncapitalize<R>
      ? `${Uncapitalize<T>}${KebabCase<R>}`
      : `${Uncapitalize<T>}-${KebabCase<R>}`
    : S

/**
 * 判断R extends Uncapitalize<R>每次`rest`是否是以小写字母开头
 * 是: 将前面字符串的小写拼上后续的
 * 否: 使用-隔开
 */