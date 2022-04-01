type Last<T extends any[]> =
 T extends [...infer _, infer Last] ? Last : never
//  T extends [...any[], infer Last] ? Last : never


