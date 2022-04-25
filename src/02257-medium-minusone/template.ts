//构建数组
// type BuildArray<L extends number = 1, Ele = number, A extends number[] = []> = 
//   A['length'] extends Ele
//     ? A
//     : BuildArray<L,Ele,[L,...A]>


// type aKl = BuildArray<1, 10, []>
// type MinusOne<T extends number> = 
//   BuildArray<1, T, []> extends [infer _, ...infer R]
//     ? R['length']
//     : never

// type MinusOne<T extends number, K extends number[] = []> = T extends K['length'] 
// ? K extends [number, ...infer R] 
//   ? R['length']
//   : never
// : MinusOne<T, [...K, 0]>
    type LengthToArray<N extends string, T extends any[] = []> = `${T['length']}` extends N ? T : LengthToArray<N, [any, ...T]>;

    type CreateLengthArray<S extends string, T extends any[] = []> = S extends `${infer F}${infer L}` ? CreateLengthArray<L, [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...LengthToArray<F>]> : T;
    
    //以10个为一组,进行展开

    type MinusOne<T extends number> = CreateLengthArray<`${T}`> extends [infer _, ...infer S] ? S['length'] : never;


//通过构造一个数组来,进行加减法


// type Kl1c = 1 extends [number,number]['length'] ? true : false