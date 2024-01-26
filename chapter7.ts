// void 타입 (공허, 아무것도 없다)
// 아무것도 담을 수 없고 undefined만 담을 수 있음.
// strictNullChecks 설정 끄면(false) null도 가능
// 반환값이 없는 함수에서 타입을 undefined나 null로 하면 정말로 return으로 반환해야함.

function func1(): void {
	console.log('hello');
}

// never 타입
// null, undefined, any타입의 값도 담지 못함.
function func2(): never {
	while (true) {}
	// 무한루프해서 정상적으로 종료되거나 반환값이 있을 수가 없는 함수
}

function func3(): never {
	throw new Error();
	// 시작되자마자 에러로 종료되는 함수
}

function func4() {
	return undefined;
}
function func5(): void {
	return undefined;
}

type VoidFunc = () => void;

const myFunc: VoidFunc = function () {
	return 'hello'; // 성공
};
const myFunc2: VoidFunc = () => {
	return 'hello'; // 성공
};
