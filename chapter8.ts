function unknownExam() {
	type Dog = {
		name: string;
		color: string;
	};

	type Cat = {
		name: string;
		language: string;
	};

	type Intersection = Dog & Cat; //교집합:
	let intersection: Intersection = {
		name: '',
		color: '',
		language: '',
	};
}
