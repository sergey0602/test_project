import { SelectChangeEvent } from '@mui/material/Select';

import { IMenuItem } from "./IMenuItem";

export interface IDropdownProps {
  value: string;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
  dropdownItems: IMenuItem[];
  width?: string;
}
