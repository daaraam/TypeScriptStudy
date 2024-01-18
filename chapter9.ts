// 타입추론

const num = 10;
const str = 'hello'; //리터럴로 추론함. 변경될 일 없는 상수니까
let arr = [1, 'se']; // 유니온 타입으로 추론함.

// 타입단언
type Person = {
	name: string;
	age: number;
};

let person = {} as Person; //별칭인 Person타입으로 간주하라고 단언함 (assertion)
person.name = 'james';
person.age = 27;

type Dog = {
	name: string;
	color: string;
};

let dog = {
	name: 'daram',
	color: 'brown',
	breed: 'pome',
} as Dog;

// 타입단언의 규칙:
// 값 as 단언 (단언식)
// A as B일때, A가 B의 슈퍼타입이거나, 서브타입이여야 함.

let num1 = 10 as never;
// number타입이 never의 슈퍼타입이라서 단언 가능

let num2 = 10 as unknown;
//number가 unknown의 서브타입이라서 단언 가능

// let num3 = 10 as string;
//number와 string은 서브타입도 슈퍼타입도 아니기 때문에 단언 불가능.

let num3 = 10 as unknown as string;
// 다중 단언을 하면 단언할 수 없는 타입도 단언 가능. (안좋은 방법!)

/** const 단언 */

let cat = {
	name: '야옹이',
	color: 'red',
} as const;

// Non Null 단언 : !가 있으면 null이나 undefined가 아니라고 단언함.
