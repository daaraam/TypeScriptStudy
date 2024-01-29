// 제네릭 인터페이스
// <T> <- 타입변수, 타입 파라미터, 제네릭 타입 변수, 제네릭 타입 파라미터
interface KeyPair<K, V> {
	key: K;
	value: V;
}

let KeyPair: KeyPair<string, number> = {
	key: 'key',
	value: 123,
};

let KeyPair2: KeyPair<boolean, string[]> = {
	key: true,
	value: ['a', 'b'],
};

// 인덱스 시그니쳐

interface NumberMap {
	[key: string]: number;
	// key가 string이고 value가 number면 다 허용함
}

interface Map<V> {
	[key: string]: V;
}

let stringMap: Map<string> = {
	key: 'value',
};
// 하나의 타입 V로 여러 객체를 만들 수 있음.
// 여기서 key를 string으로 했으니 key-value모두 string이 됨. 타입을 유연하게 정의할 수 있다.

let numberMap: Map<number> = {
	key: 123,
};

// 제네릭 타입 별칭

type Map2<V> = {
	[key: string]: V;
};

let stringMap2: Map2<string> = {
	key: 'hello',
};

// 제네릭 인터페이스 예시

interface Student {
	type: 'student';
	school: string;
}

interface Developer {
	type: 'developer';
	skill: string;
}

interface User<T> {
	name: string;
	profile: T;
}

function goToSchool(user: User<Student>) {
	// if (user.profile.type !== 'student') {
	// 	console.log('잘못된접근');
	// 	return;
	// } 이런 타입좁히기가 필요없음

	const school = user.profile.school;
	console.log(`${school}로 등교완료`);
}

const developerUser: User<Developer> = {
	name: '홍길동',
	profile: {
		type: 'developer',
		skill: 'TypeScript',
	},
};

const studentUser: User<Student> = {
	name: '김학생',
	profile: {
		type: 'student',
		school: 'S.Univ',
	},
};
