type TupleToUnion<T> = T extends [...infer K] ? K[number] : never


type AAA = TupleToUnion<[123, '456', true]>