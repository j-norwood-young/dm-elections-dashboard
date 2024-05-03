import data2014 from '$lib/data/seats_2014.json';
const Data2014 = data2014.partyResults;
import data2019 from '$lib/data/seats_2019.json';
const Data2019 = data2019.partyResults;
    
type ResultItem = {
    id: string;
	LogoUrl: string;
	text: string;
	count: number;
}

export type ElectionResults = ResultItem[];

interface DataVars {
    title: string;
    seats: number;
    modified: ElectionResults;
};

export const loadDefaultDataSet = () => (Data2014);
	
export const generateHemicycleInformation = (year: string) => {
	const calculateSeats = (arr: ElectionResults) => arr.reduce((partialSum, item: ResultItem) => partialSum + item.count, 0);

	let inputData: ElectionResults = [];

	const vars: DataVars = {
		title: '',
		seats: 0,
		modified: []
	};

	switch (year) {
		case '2014':
			inputData = Data2014;
			vars.title = '2014';
			break;
		case '2019':
			inputData = Data2019;
			vars.title = '2019';
			break;
		case '2024':
			inputData = [] as ElectionResults;
			vars.title = '2024';
			break;
    }
	vars.seats = calculateSeats(inputData);
	vars.modified = inputData.map((item) => ({
		...item,
		text: `${item.text} (${item.count})`
	}));

	return vars;
};