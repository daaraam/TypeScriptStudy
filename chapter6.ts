// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;
anyVar = 'ten';

// unknown
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
// unknownVar.toUpperCase();
// unknownVar[0];
// unknownVar - 1;
// unknownVar.data;

// toUpperCase, 연산, 꺼내쓰기 불가능, 사용하려면 if(typeof unKnownVar==='number)이런식으로 정제해야함.
// any보다 상대적으로 안전함.

var array: (number | string)[] = [1, '2', 3];
var object: { data: number | string } = { data: '123' };

let user: string = 'kim';
let age: undefined = undefined;
let married: boolean = false;
let 철수: (string | number | boolean | undefined)[] = [user, age, married];

type School = {
	score: (number | boolean)[];
	teacher: string;
	friend: string | string[];
};

let school: School = {
	score: [100, 97, 84],
	teacher: 'Phil',
	friend: 'John',
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
