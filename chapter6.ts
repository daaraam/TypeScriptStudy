// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;
anyVar = 'ten';

// unknown
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// toUpperCase, 연산, 꺼내쓰기 불가능, 사용하려면 if(typeof unKnownVar==='number)이런식으로 정제해야함.
// any보다 상대적으로 안전함.
