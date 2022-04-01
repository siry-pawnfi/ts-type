type Pop<T extends any[]> =
 T extends [...infer Need, infer _] ? Need : never
//  T extends [...infer Need, any] ? Need : never

