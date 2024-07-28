import { createRange } from "./createRange";
import { IMenuItem } from "../interfaces/components/Dropdown/IMenuItem";

export const createAgeItems = (start: number, end: number): IMenuItem[] => {
  const items: number[] = createRange(start, end);
  return items.map((item: number) => ({ value: `${item}`, label: `${item}`}))
};
