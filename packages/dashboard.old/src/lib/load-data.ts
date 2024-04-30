import { seats2009, seats2014, seats2019, seats2024 } from "./urls";

type ResultItem = {
    id: string;
	LogoUrl?: string;
	Abbreviation: string;
	Seats: number;
}

export type ElectionResults = ResultItem[];

interface DataVars {
    title: string;
    seats: number;
    modified: ElectionResults;
};

export const fetch2009Data = async () => await fetch(seats2009);
export const fetch2014Data = async () => await fetch(seats2014);
export const fetch2019Data = async () => await fetch(seats2019);
export const fetch2024Data = async () => await fetch(seats2024);

export const dataMapper = () => (party: ResultItem, id: string) => {
	return {
		id: id,
		text: party.Abbreviation,
		count: party.Seats
	};
};

export const loadDefaultDataSet = async () => (await fetch2014Data()).json();
	
export const generateHemicycleInformation = (year: string, data: ElectionResults) => {
	const calculateSeats = (arr: ElectionResults) => arr.reduce((partialSum, item: ResultItem) => partialSum + item.Seats, 0);

	let inputData: ElectionResults = [];

	const vars: DataVars = {
		title: '',
		seats: 0,
		modified: []
	};

	switch (year) {
		case '2014':
			inputData = data;
			vars.title = '2014';
			break;
		case '2019':
			inputData = data;
			vars.title = '2019';
			break;
		case '2024':
			inputData = data;
			vars.title = '2024';
			break;
	}

	vars.seats = calculateSeats(inputData);
	vars.modified = inputData.map((item) => ({
		...item,
		text: `${item.Abbreviation} (${item.Seats})`
	}));

	return vars;
};