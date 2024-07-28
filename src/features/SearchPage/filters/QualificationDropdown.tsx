import { FC } from "react";

import { Dropdown } from "../../../components/Dropdown";
import { SDropdownHeader, SDropdownHeaderWrapper } from "./styles";
import { TCustomDropdownProps } from "../../../interfaces/features/SearchPage/filters/TCustomDropdownProps";
import { QUALIFICATION, QUALIFICATION_DATA } from "../../../constants";

export const QualificationDropdown: FC<TCustomDropdownProps> = ({
  handleChange,
  value,
}) => {
  return (
    <SDropdownHeaderWrapper>
      <SDropdownHeader>{QUALIFICATION}</SDropdownHeader>
      <Dropdown dropdownItems={QUALIFICATION_DATA} handleChange={handleChange} value={value}/>
    </SDropdownHeaderWrapper>
  );
}
