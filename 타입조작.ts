// 1. 인덱스드 엑세스 타입(indexed access types) : 필요한 만큼만 추출해서 사용함.

// 1-1 객체
// 객체의 특정 프로퍼티를 추출하는 방법(interface는 객체특화)

interface Post {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
		age: number;
	};
}
// interface의 특정 프로퍼티만 사용할 수 있고, 기존 프로퍼티 타입이 변경되면 즉각 반영된다는 장점.
// 여기서 'author'가 index인데, 변수나 값이 아니라 객체 type임.
function printAuthorInfo(author: Post['author']) {
	// function printAuthorInfo(author: Post['author']['name']) {
	// 이런식으로 하면 author가 string타입이 됨

	console.log(`${author.name}-${author.id}`);
}

const post: Post = {
	title: '타이틀',
	content: '본문',
	author: {
		id: 1,
		name: '홍길동',
		age: 52,
	},
};

// 1-2 배열
// 배열이니까 type으로

type PostList = {
	title: string;
	content: string;
	author: {
		id: number;
		name: string;
		age: number;
	};
}[];

// 대괄호 안에 number타입을 넣으면 배열타입을 추출해옴. 어떤 숫자를 넣어도 무관.
// 인덱스에는 값이 아니라 타입을 넣는거라서 const num = 0; 한다음에 PostList[num]으로 하면 불가능.
const postList: PostList[0] = {
	title: '타이틀',
	content: '본문',
	author: {
		id: 1,
		name: '홍길동',
		age: 52,
	},
};

// 1-3 튜플

type Tup = [number, string, boolean, Date, number];
type Tup0 = Tup[0];
type Tup3 = Tup[3];
type TupNum = Tup[number]; // 최적화 유니언타입. number|string|boolean|Date

//
// 2. keyof 연산자
// 객체 형태의 타입에서 속성들만 뽑아 유니온 타입으로 만드는 연산자.

interface Person {
	name: string;
	age: number;
}

function getPropertyKey(person: Person, key: 'name' | 'age') {
	return person[key];
}

const person: Person = {
	name: '홍길동',
	age: 54,
	isJob: true,
};

getPropertyKey(person, 'name');

type Type = {
	name: string;
	age: number;
	married: boolean;
};

type Union = keyof Type;
type Union2 = 'name' | 'age' | 'married';
const union: Union = 'married';

//*typeof 연산자
// 객체 데이터를 객체 타입으로 변환해주는 연산자로 사용할 수 있다.

const obj = {
	red: 'apple',
	yellow: 'banana',
	green: 'cucumber',
};

type Color = keyof typeof obj;
// typeof obj의 keyof. 'red'|'yellow'|'green'

type Key = (typeof obj)[keyof typeof obj];
// type Key = string ('apple'|'banana'|'cucumber')

type Fruit = typeof obj;
let obj2: Fruit = {
	red: 'pepper',
	yellow: 'orange',
	green: 'leaves',
};

// obj라는 객체 데이터를 Fruit이라는 객체 타입으로 변환한 뒤 다른 객체에 구조 재사용함.

type Person1 = typeof person;

interface Person {
	name: string;
	age: number;
	isJob: boolean;
}

function getPropertyKey2(person: Person, key: keyof Person) {
	return person[key];
}

getPropertyKey2(person, 'isJob'); // true;

type Point = { x: 123; y: string };
type P = 'number' | 'string';
type PP = keyof Point;

// 3. 맵드타입

interface User {
	id: number;
	name: string;
	age: number;
}

function fetchUser(): User {
	return {
		id: 1,
		name: '홍길동',
		age: 27,
	};
}

type MappedType = {
	[key in 'id' | 'age']?: User[key];
};
type PartialUser = {
	id?: number;
	name?: string;
	age?: number;
};

// type PartialUser = {
// 	[key in keyof User]?: User[key];
// 	// key가 한번은 id, 한번은 name, 한번은 age가 된다는 뜻
// };

type ReadOnlyUser = {
	readonly [key in keyof User]: User[key];
	// 모든 프로퍼티가 읽기 전용 프로퍼티가 됨
};

// keyof 적용
// 적용안할 경우 [key in 'id'|'name'|'age']

interface Obj {
	name: string;
	email: string;
}

type ObjNumber = {
	[P in keyof Obj]: number; // 맵드 타입
};
/*
 type ObjNumber = {
	 name: number;
	 email: number;
 }
 */

//  맵드타입 + 제네릭

type Prop = 'prop1' | 'prop2';

type Make<T> = {
	[key in Prop]: T;
};

type T1 = Make<boolean>;

const obj1: T1 = {
	prop1: true,
	prop2: false,
};

// 인터페이스 타입 바꾸기 string,number => boolean | undefined
interface Person {
	name: string;
	age: number;
}

type MakeBoolean<T> = {
	[P in keyof T]?: boolean;
};

/**
 {
	name? : boolean | undefined;
	age? : boolean| undefined;
 }
 */

const pMap: MakeBoolean<Person> = {};
pMap.name = true;
pMap.age = false;
pMap.age = undefined;
