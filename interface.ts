// 인터페이스

interface Person {
	readonly name: string;
	age?: number;
	// sayHi: () => void;
	sayHi(): void; //호출 시그니쳐
}

const person: Person = {
	name: '홍길동',
	sayHi: function () {
		console.log('hi');
	},
};

interface Window {
	title: string;
}

interface Window {
	ts: string;
}

// interface는 type과 달리 동일이름으로 객체 확장 가능

// interface A extends B {} : A는 B를 다 갖고 추가로 확장한다. 상속이라고도 부른다.
interface Animal {
	name: string;
	color: string;
}
interface Dog extends Animal {
	//Dog는 Animal을 확장한 서브타입
	// name:number; 이건 불가능. extends를 사용했을땐 원본 프로퍼티 타입의 서브타입이 되어야 함.
	isBark: boolean;
}

const dog: Dog = {
	name: '',
	color: '',
	isBark: true,
};
