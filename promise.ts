// promise
// 비동기 작업의 결과값을 제네릭으로 전달하면 response도 number로 타입을 직접 명시할 수 있다.
const promise = new Promise<number>((resolve, reject) => {
	setTimeout(() => {
		resolve(20);
		reject('~~때문에 실패');
	}, 3000);
});

// response는 unknown으로 추론됨. resolve의 타입을 자동으로 가져오지 x
promise.then(response => {
	console.log(response * 10);
});

promise.catch(err => {
	if (typeof err === 'string') {
		console.log(err);
	}
});
// 실패했을때의 타입은 정해줄 수 없어서 타입좁히기를 사용해야한다.

type Post = {
	id: number;
	title: string;
	content: string;
};
function fetchPost(): Promise<Post> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: 1,
				title: '게시글 제목',
				content: '게시글 본문',
			});
		}, 3000);
	});
}
