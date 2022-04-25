type ReplaceAll<S extends string, From extends string, To extends string> = 
  From extends ''
    ? S
    :
      S extends `${infer Pre}${From}${infer Next}`
        ? `${Pre}${To}${ReplaceAll<Next, From, To>}`
        : S
 