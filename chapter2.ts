// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'ts'];
let boolArr: Array<boolean> = [true, false]; //제네릭

// 배열의 요소 타입이 다양할때
let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의할때
let doublerArr: number[][] = [
	[1, 2, 3],
	[4, 5],
];

// 튜플 (타입스크립트에만 있음, 길이와 타입이 고정된 배열)
let tup1: [number, number] = [1, 2];
let tup2: [number, string, Boolean] = [1, '2', false];

tup1.push(1);
tup2.pop();
// 튜플이 길이제한 해놔도 push와 pop은 가능하므로 주의!
