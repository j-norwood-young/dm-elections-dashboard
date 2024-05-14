import { Readable, type Writable, writable } from "svelte/store";
import { useMediaQuery } from "svelte-breakpoints";

type Query = Readable<boolean>;
export type CurrentScreenSize = Writable<CurrentScreenData>;

const isSmall: Query = useMediaQuery("(max-width: 200px)");
const isMedium: Query = useMediaQuery("(min-width: 480px)");
const isBigger: Query = useMediaQuery("(min-width: 720px)");
const isRest: Query = useMediaQuery("(min-width: 1024px)");

interface screenData {
  arc: number;
  className: string;
  hcWidth: number;
  hcHeight: number;
  query: Query;
}

type CurrentScreenData = Record<
  "small" | "medium" | "bigger" | "rest",
  screenData
>;

export const currentScreenSize: CurrentScreenSize = writable({
  small: {
    arc: 360,
    className: "small",
    hcWidth: 10,
    hcHeight: 10,
    query: isSmall,
  },
  medium: {
    arc: 360,
    className: "small",
    hcWidth: 10,
    hcHeight: 10,
    query: isMedium,
  },
  bigger: {
    arc: 360,
    className: "small",
    hcWidth: 10,
    hcHeight: 10,
    query: isBigger,
  },
  rest: {
    arc: 360,
    className: "small",
    hcWidth: 10,
    hcHeight: 10,
    query: isRest,
  },
});

export default currentScreenSize;
