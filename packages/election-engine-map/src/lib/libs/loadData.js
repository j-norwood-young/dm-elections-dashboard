import {
    votes2009,
    votes2014,
    votes2019,
    votes2024,
  } from "./urls.js";
  
  const DATA_RERESH_RATE = 30000;

  
  
  export const votes2009Data = (async () =>
    (await fetch(votes2009)).json().then((res) => res));
  export const votes2014Data = async () =>
    (await fetch(votes2014)).json().then((res) => res);
  export const votes2019Data = async () =>
    (await fetch(votes2019)).json().then((res) => res);
  export const votes2024Data = async () =>
    (await fetch(votes2024)).json().then((res) => res);