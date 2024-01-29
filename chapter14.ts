/**함수오버로딩
 * 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * JS에서는 x TS에서만 가능
 */

// 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 -> 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
	if (typeof b === 'number' && typeof c === 'number') {
		console.log(a + b + c);
	} else {
		console.log(a * 20);
	}
}

// func()
// func(1,2)

func(1); //오버로드 시그니쳐에 맞아서 허용
func(1, 2, 3); //오버로드 시그니쳐에 맞아서 허용

/** 함수 사용자 정의 타입 가드 */

type Dog = {
	name: string;
	isBark: boolean;
};

type Cat = {
	name: string;
	isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
	// animal is Dog : return 이하가 참이라면, animal은 Dog이다.
	return (animal as Dog).isBark !== undefined;
}
function isCat(animal: Animal): animal is Cat {
	return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
	if (isDog(animal)) {
		animal;
	} else if (isCat(animal)) {
		animal;
	}
}
