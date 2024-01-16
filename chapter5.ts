// enum 타입 : 열거형 타입
// 여러 값에 각각 이름을 부여해 열거해두고 사용하는 타입스크립트만의 타입
// 컴파일해도 사라지지 않음

// 숫자형 enum
enum Role {
	ADMIN,
	USER,
	GUEST,
}
enum Language {
	korean = 'ko',
	english = 'eng',
}
const user1 = {
	name: '김아무개',
	role: Role.ADMIN,
	language: Language.korean,
};

const user2 = {
	name: '박아무개',
	role: Role.USER,
	language: Language.korean,
};

const user3 = {
	name: '최아무개',
	role: Role.GUEST,
	language: Language.english,
};

console.log(user1, user2, user3);
