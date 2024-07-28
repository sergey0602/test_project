import { IDropdownProps } from "../../../components/Dropdown/IDropdownProps";

export interface IAgeFilterProps {
  handleFromChange: IDropdownProps["handleChange"];
  handleToChange: IDropdownProps["handleChange"];
  fromValue: IDropdownProps["value"];
  toValue: IDropdownProps["value"];
}
