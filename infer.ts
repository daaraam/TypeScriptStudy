// infer(inference : 추론하다)

type FuncA = () => string;
type FuncB = () => number;
type ReturnType<T> = T extends () => infer R ? R : never;
// R타입은 조건식이 참이 되게끔 추론하여 그 타입으로 변함
type A = ReturnType<FuncA>; //string
type B = ReturnType<FuncB>; //number
type C = ReturnType<number>; //never;
// 타입 R을 추론할 수가 없으므로 never.
