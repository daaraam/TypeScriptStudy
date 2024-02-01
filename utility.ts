/**1. Partial<T> : 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
	title: string;
	tag: string[];
	content: string;
	thumbnail?: string;
}

const draft: Partial<Post> = {
	title: '임시 타이틀',
};

// tag, content, thumbnail이 없지만 오류가 발생하지 않음.
// tag, content, thumbnail를 옵셔널 체이닝을 쓴 것 처럼 선택적 프로퍼티로 변경했기 때문에

/** 2. Required<T>
 * : 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

const requireThumbnail: Required<Post> = {
	title: '제목',
	tag: ['a', 'b'],
	content: '컨텐츠',
	thumbnail: 'string',
};

// thumbnail은 옵셔널체이닝을 사용한 선택적 프로퍼티이기 때문에 없어도 오류가 발생하지 않음.
// 하지만 이 새로운 객체 requireThumbnail에서는 반드시 모든 프로퍼티가 필요하다는 새로운 규칙을 만들고 싶을 때 Required<T>를 사용하면 된다.

/** 3. Readonly<T>
 * : 특정 객체 타입에서 모든 프로퍼티를 읽기전용 프로퍼티로 바꿔주는 타입
 */

const readonlyPost: Readonly<Post> = {
	title: '보호된 게시글',
	tag: [],
	content: '보호된 내용',
};

/** 4. Pick<T,K>
 * : 객체 타입에서 특정 프로퍼티만 뽑아내는 타입
 */

const legacyPost: Pick<Post, 'title' | 'content'> = {
	title: '옛날 게시글',
	content: '옛날 내용',
};

// Post타입이라면 tag까지 필수로 포함해야 하지만, Pick<T,K>에 K에 특정 프로퍼티를 넣으면
// 특정 프로퍼티만 사용해도 오류가 발생하지 않음.

/**5. Omit<T,K>
 * : 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

const noTitlePost: Omit<Post, 'title'> = {
	content: '',
	tag: [],
	thumbnail: '',
};
// K로 지정한 타입을 제외한 프로퍼티를 허용함

/** 6. Record<K,V>
 * K는 객체타입, V는 K에 할당할 value
 */

type Thumbnail = Record<'large' | 'medium' | 'small', { url: string; img: string }>;

/** 7. Exclude<T,U>
 * T에서 U를 추방하다.
 */
type A = Exclude<string | boolean, string>;

/** 8. Extract<T,U>
 * T에서 U를 추출하다.
 */
type B = Extract<string | boolean, string>;

/** 9. ReturnType<T>
 * 함수의 반환값 타입을 추출한다.
 */
function funcA() {
	return 'string!';
}
type ReturnA = ReturnType<typeof funcA>;
