function func(name: string, date: Date, age?: number) {
	if (typeof age === 'number') {
		console.log(age.toFixed());
	} else if (typeof name === 'string') {
		console.log(name.toUpperCase());
	} else if (date instanceof Date) {
		console.log(date.getTime());
	}
}

func('홍길동', new Date());
