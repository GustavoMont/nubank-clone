import FontWeight from "../models/TitleType";

export function formateToCurrency(value: number) {
  return value.toFixed(2).replace(".", ",");
}

export function handleFontWeight(fontFamily: string, fontWeight?: FontWeight) {
  if (fontWeight) {
    return { fontFamily: `${fontFamily}-${fontWeight}` };
  }
  return {};
}
