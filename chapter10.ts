// 타입 좁히기
// 조건문 등으로 넓은타입에서 좁은 타입으로 좁히는 방법
// 1. typeof
// 2. instanceof : A instance Date A의 값이 B냐고 물어보는 것

type Person = {
	name: string;
	age: number;
};

function func(value: number | string | Date | null | Person) {
	value; //number|string
	if (typeof value === 'number') {
		console.log(value.toFixed()); //value : number
	} else if (typeof value === 'string') {
		console.log(value.toUpperCase()); //value : string
	} else if (value instanceof Date) {
		console.log(value.getTime()); //value: Date
	} else if (value && 'age' in value) {
		console.log(`${value.name}은 ${value.age}세 입니다.`); //value: Person
	}
}

// value:number => toFixed();
// value:string => toUpperCase();
// value:Date => getTime();
// value:Person => value.name / value.age

/**
 * 서로소 유니온 타입으로 타입 좁히기
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
	tag: 'ADMIN';
	name: string;
	kickCount: number;
};
type Member = {
	tag: 'MEMBER';
	name: string;
	point: number;
};
type Guest = {
	tag: 'GUEST';
	name: string;
	visitCount: number;
};

type User = Admin | Member | Guest;

// Admin=> name님 현재까지 kickCount명 강퇴했습니다.
// Member=> name님 현재까지 point모았습니다.
// Guest=> name님 현재까지 visitCount번 오셨습니다.

// function login(user: User) {
// 	if ('kickCount' in user) {
// 		`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`;
// 	} else if ('point' in user) {
// 		`${user.name}님 현재까지 ${user.point}모았습니다.`;
// 	} else {
// 		`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`;
// 	}
// }

// 직관적으로 해석할 수 없는 상태.

// function login(user: User) {
// 	if (user.tag === 'ADMIN') {
// 		`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`;
// 	} else if (user.tag === 'MEMBER') {
// 		`${user.name}님 현재까지 ${user.point}모았습니다.`;
// 	} else {
// 		`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`;
// 	}
// }

function login(user: User) {
	switch (user.tag) {
		case 'ADMIN': {
			console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
			break;
		}
		case 'MEMBER': {
			console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
			break;
		}
		case 'GUEST': {
			console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
			break;
		}
	}
}
