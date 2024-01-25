/**
 * 함수타입정의
 */

function func(a: number, b: number): number {
	return a + b;
}

// 화살표함수

const add = (a: number, b: number): number => a + b;

// 함수의 매개변수

function introduce(name = '홍길동', age: number, tall?: number) {
	console.log(`name: ${name}`);
	if (typeof tall === 'number') {
		console.log(`tall:${tall}+10`);
	}
}

introduce('홍길동', 48, 180);
introduce('홍길동', 48);

function getSum(...rest: number[]) {
	let sum = 0;
	rest.forEach(item => (sum += item));
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);

// 함수 타입 표현식
type Operation = (a: number, b: number) => number;
const sum: Operation = (a, b) => a + b;
const minus: Operation = (a, b) => a - b;
const multiply: (a: number, b: number) => number = (a, b) => a * b;

// 호출 시그니쳐 (콜 시그니쳐)
type Operation2 = { (a: number, b: number): number };
const sum2: Operation2 = (a, b) => a + b;
const minus2: Operation2 = (a, b) => a - b;
const multiply2: (a: number, b: number) => number = (a, b) => a * b;
