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
