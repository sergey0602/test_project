import { FC } from "react";

import { Dropdown } from "../../../components/Dropdown";
import { SDropdownHeader, SDropdownHeaderWrapper } from "./styles";
import { FIND_PSYCHOLOGIST, FIND_PSYCHOLOGIST_DATA } from "../../../constants";
import { TCustomDropdownProps } from "../../../interfaces/features/SearchPage/filters/TCustomDropdownProps";

export const FindPsychologistDropdown: FC<TCustomDropdownProps> = ({
  handleChange,
  value,
}) => {
  return (
    <SDropdownHeaderWrapper>
      <SDropdownHeader>{FIND_PSYCHOLOGIST}</SDropdownHeader>
      <Dropdown dropdownItems={FIND_PSYCHOLOGIST_DATA} handleChange={handleChange} value={value}/>
    </SDropdownHeaderWrapper>
  );
}
