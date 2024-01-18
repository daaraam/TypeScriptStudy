// 객체 리터럴 타입
// 구조적 타입 시스템 (property type system) <-> 명목적 타입 시스템

type User = {
	name: string;
	age: number;
};

let user1: User = {
	name: '홍길동',
	age: 28,
};

let user2: User = {
	name: '아무개',
	age: 33,
};

let user: { id?: number; name: string } = {
	// id? id는 있어도 되고 없어도 된다. 있다면 number타입이여야 한다. 선택적optional 프로퍼티
	id: 1,
	name: '홍길동',
};

let config: { readonly apiKey: string } = {
	apiKey: 'my api key',
};

// 읽기전용 프로퍼티는 값 수정이 불가능
