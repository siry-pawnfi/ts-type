type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal; // (parameter) animal: Fish | Human
  } else {
    animal; // (parameter) animal: Bird | Human
  }
}



function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
// 当 isFish 被传入变量进行调用，TypeScript 就可以将这个变量收窄到更具体的类型：

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
 
if (isFish(pet)) {   //这里会将pet类型收窄为Fish,才能调用.swim()方法
  pet.swim(); // let pet: Fish
} else {
  pet.fly(); // let pet: Bird
}



interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'squar';
  sideLenth: number;
}

type Shape = Circle | Square

function getArea( shape: Shape) {
  if(shape.kind === 'circle'){
    return Math.PI * shape.radius
  } else {
    return shape.sideLenth ** 2
  }
} 



interface Person {
  name: string;
  age: number
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}


let writeablePerson: Person = {
  name: 'Person',
  age: 42
}


let readonlyPerson: ReadonlyPerson = writeablePerson

console.log(readonlyPerson.age) //42
writeablePerson.age++   //这里writeablePerson相当于readonlyPerson的别名.
console.log(readonlyPerson.age) //43



//******************索引签名 */
// 你不能提前知道一个类型里的所有属性的名字，但是你知道这些值的特征。

interface StringArray {
  [index: number]: string
}
//当使用这个索引签名时,使用键的类型为number时, 值必须为string类型
//一个索引签名的属性类型必须是 string 或者是 number。
const myArray: StringArray = {
  1:'2',
  2: '2',//这里其实会属性number类型转为string类型,所以下面的属性'3'能正常工作
  '3': '33'  
}


interface NumberDictionary {
  [index: string]: number | string  //这里使用联合类型, 瞎买你的name属性对应的值,才能正确声明为 string
  length: number
  name: string
}


//继承

interface A {
  name: string
}

interface B extends A {
  age: number
}

let c: B = {
  name: 'scc',
  age: 22
}


//交叉类型

type C = A & B  //C中拥有A和B的所有属性


//交叉类型和继差不多
//但是交叉支持重写类型,而继承是不能重写的

interface Colorful1 {
  color: string;
}

interface ColorfulSub1 extends Colorful1 {
  color: number
}


interface Colorful2 {
  color: string;
}
type ColorfulSub2 = Colorful2 & {
  color: number
}//这里不会报错 但是color的类型为never(取得是number与string的交集)



//

interface Box {
  name: unknown
}

let xx :Box = {
  name: 'string'
}
//这里如果不加判断的话, 赋值报错(unknow不能赋值给string)
let str: string = typeof xx.name === 'string' ? xx.name : 'cc'

//使用泛型进行上面的改写
interface Box1<T> {
  contents: T
}



// ReadonlyArray<Type> 提供了更简短的写法 readonly Type[]。

type Either2dOr3d = [number, number, number?];  //源组中的可选属性 写字最后面加?