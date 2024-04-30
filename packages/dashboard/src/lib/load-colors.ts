import colors from "$common/color-scheme.json";
import type { ElectionResults, ResultItem } from "$lib/load-data";

export type ColorPalette = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
};

export interface SchemeFile {
  high: ColorPalette;
  low: ColorPalette;
  dm: ColorPalette;
}

export interface ColorScheme {
  colorSchemes: SchemeFile[];
}

export const decorateWithColors = (
  data: ElectionResults,
  scheme: ColorScheme
) => {
  const schemes = Object!.entries!(scheme!);

  return data.map((item: ResultItem, index: number) => ({
    ...item,
    color: schemes.at(index)![1],
  }));
};

export const toggleColorScheme = (scheme: string) => {
  switch (scheme) {
    case "high":
      return colors.colorSchemes[0].high;
    case "low":
      return colors.colorSchemes[1].low;
    case "dm":
      return colors.colorSchemes[2].dm;
  }
};
