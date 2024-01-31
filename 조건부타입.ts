// 조건부 타입

type A = number extends string ? string : number;
// 타입 A는 number가 string의 서브타입이라면 type A는 string타입이 된다 / 거짓이라면 number 타입이 된다.

type ObjA = {
	a: number;
};

type ObjB = {
	a: number;
	b: number;
};

type B = ObjB extends ObjA ? number : string;
// ObjB가 ObjA의 슈퍼타입이니까 type B는 number타입이 됨.
// ObjB가 확장하냐 ObjA를. ObjB가 ObjA의 프로퍼티를 포함하고 있고 추가로 가지고 있으니까 ObjA가 ObjB의 슈퍼타입임.
// 앞에있는 타입이 뒤의 타입의 서브타입인지를 확인

// 제네릭과 조건부타입

type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>;
//varA:string
let varB: StringNumberSwitch<string>;
// varB:number

// 함수오버로딩으로 타입을 먼저 정의해줌
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
	if (typeof text === 'string') {
		return text.replaceAll(' ', '');
		// replaceAll() : 첫번째 인자를 찾아 두번째 인자로 모두 바꿔주는 메서드
	} else {
		return undefined;
	}
}

let result = removeSpaces('내 이름은 홍길동 이다.');

// 분산적인 조건부 타입

let c: StringNumberSwitch<number | string>;
// number|string은 number의 슈퍼타입이니 number가 되어야할것같지만 string|number타입으로 읽힘

type Exclude<T, U> = T extends U ? never : T;
