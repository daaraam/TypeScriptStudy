// 1. 인덱스드 엑세스 타입 : 필요한 만큼만 추출해서 사용함.

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
	// function printAuthorInfo(author: Post['author']['name']) { 이런식으로 하면 author가 string타입이 됨

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
