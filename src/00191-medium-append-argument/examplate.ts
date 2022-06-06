type AppendArgument<Fn, A> = 
  Fn extends (...args: infer T) => infer Re
    ? (...args: [...T, A]) => Re
    : Fn



//处理函数参数的东西,直接用infer来进行推断