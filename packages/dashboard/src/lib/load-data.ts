import {
  seats2009,
  seats2014,
  seats2019,
  seats2024,
  votes2009,
  votes2014,
  votes2019,
  votes2024,
} from "./urls.js";

const DATA_RERESH_RATE = 30000;

type ResultItem = {
  id: string;
  LogoUrl?: string;
  Abbreviation: string;
  Seats: number;
  text?: string;
};

export type ElectionResults = ResultItem[];

export const seats2009Data = async () =>
  (await fetch(seats2009)).json().then((res) => res.partyResults);
export const seats2014Data = async () =>
  (await fetch(seats2014)).json().then((res) => res.partyResults);
export const seats2019Data = async () =>
  (await fetch(seats2019)).json().then((res) => res.partyResults);
export const seats2024Data = async () =>
  (await fetch(seats2024)).json().then((res) => res.partyResults);

export const votes2009Data = async () =>
  (await fetch(votes2009)).json().then((res) => res);
export const votes2014Data = async () =>
  (await fetch(votes2014)).json().then((res) => res);
export const votes2019Data = async () =>
  (await fetch(votes2019)).json().then((res) => res);
export const votes2024Data = async () =>
  (await fetch(votes2024)).json().then((res) => res);
