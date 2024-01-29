// 제네릭 : 일반적인, 포괄적인 함수 | 종합적인, 모든 타입에 두루두루 쓸수있는 범용적인 함수

// function func(value: unknown) {
// 	return value;
// }
// if (typeof num === 'number') {
// 	num.toFixed();
// }
// // 이런식으로 타입가드를 이용해야함

// 제네릭 함수를 사용하니까 JS처럼 호출할때마다 타입이 추론됨.
function func<T>(value: T): T {
	return value;
}

let num = func(10);
let str = func('sdf');
let arr = func<[number, number, number]>([1, 2, 3]);
// 튜플타입으로 추론되게끔 정의함. 명시적으로 직접 정의하는 것이 가능하다.

// 제네릭 사례 1
function swap<T, U>(a: T, b: U) {
	return [b, a];
}
const [a, b] = swap('1', 2);
// a와 b의 타입이 다른 경우에는 제네릭 매개변수를 복수로 해야함.
// T에 string, U에 number를 할당

// 제네릭 사례 2
function returnFirstValue<T>(data: [T, ...unknown[]]) {
	return data[0];
	// 호출 전에는 unknown으로 추론해서 오류가 발생할때, unknown배열이야 라고 T[]를 해줌.
}

let num1 = returnFirstValue([0, 1, 2]);
let str1 = returnFirstValue([1, 'hello', 'my']);
// number|string이 아니라 무조건 첫번째 타입을 추론하면 좋겠다. 튜플타입으로 정의해주기
// 원래 data: T[]였는데 data:[T, ...unknown[]]로 바꾸기.

// 제네릭 사례 3
function getLength<T extends { length: number }>(data: T) {
	// length: number 프로퍼티를 갖고있는 객체로 T로 확장한다.
	return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength('12345');
let var3 = getLength({ length: 10 });
// let var4 = getLength(19); length 프로퍼티가 없는 number는 허용안함.

// map메서드

const arr2 = [1, 2, 3];
const newArr = arr.map(item => item * 2);

function map<T, U>(arr: T[], callback: (item: T) => U) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}
	return result;
}

map(arr, item => item * 2);
// item은 arr의 타입과 같아야함
map(['hi', 'hello'], item => parseInt(item));

// forEach메서드

const arr3 = [1, 2, 3];
arr3.forEach(item => console.log(item));
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

function forEach<T>(arr: T[], callback: (item: T) => void) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i]);
	}
}

forEach(arr3, item => {
	console.log(item.toFixed());
});

forEach(['123', 'sds'], item => {
	item;
});
