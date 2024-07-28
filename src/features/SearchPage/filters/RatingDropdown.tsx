import { FC } from "react";

import { Dropdown } from "../../../components/Dropdown";
import { SDropdownHeader, SDropdownHeaderWrapper } from "./styles";
import { TCustomDropdownProps } from "../../../interfaces/features/SearchPage/filters/TCustomDropdownProps";
import { RATING, RATING_DATA } from "../../../constants";

export const RatingDropdown: FC<TCustomDropdownProps> = ({
  handleChange,
  value,
}) => {
  return (
    <SDropdownHeaderWrapper>
      <SDropdownHeader>{RATING}</SDropdownHeader>
      <Dropdown dropdownItems={RATING_DATA} handleChange={handleChange} value={value}/>
    </SDropdownHeaderWrapper>
  );
}
