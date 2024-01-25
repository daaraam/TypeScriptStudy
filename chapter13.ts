/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은지를 판단하는 기준
 * 1) 반환값의 타입이 호환되는가?
 * 2) 매개변수의 타입이 호환되는가?
 */

//  * 1) 반환값의 타입이 호환되는가? = 반환값이 다운캐스팅되면 호환이 불가능하다.
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; number리터럴타입이 number의 하위이므로 호환불가능.

//  * 2) 매개변수의 타입이 호환되는가?
//      2-1) 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = value => {};
let d: D = value => {};

// c = d; 매개변수의 경우에는 업캐스팅인 경우에 호환이 불가능하다.
d = c;

type Animal = { name: string };

type Dog = { name: string; color: string };
let animalFunc = (animal: Animal) => {
	console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
	console.log(dog.name);
	console.log(dog.color);
};

// animalFunc=dogFunc;
// A(슈퍼)<=B(서브)일때 다운캐스팅은 호환 가능한데 업캐스팅은 호환 불가능하다.
dogFunc = animalFunc;

//      2-2) 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;
let func1: Func1 = (a, b) => {};
let func2: Func2 = a => {};

func1 = func2;
// func2 = func1; 매개변수의 개수가 다를땐 매개변수의 개수가 더 적을때만 호환이 된다.
// 물론 매개변수의 타입이 다르면 안된다.
