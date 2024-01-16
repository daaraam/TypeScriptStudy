// 타입 별칭 (Type Alias)
type User = {};

// 인덱스 시그니처
type CountryCodes = {
	[key: string]: string;
};
let countryCodes: CountryCodes = {
	korea: 'ko',
	unitedState: 'us',
	unitedKingdom: 'uk',
};

type CountryNumberCodes = {
	[key: string]: number;
	korea: number;
	// 반드시 포함해야할것을 지정할수 있는데, 인덱스 타입이 일치하거나 호환해야함
};
let countryNumberCodes: CountryNumberCodes = {
	korea: 410,
	unitedState: 840,
	unitedKingdom: 826,
};
