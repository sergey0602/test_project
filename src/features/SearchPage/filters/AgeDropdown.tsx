import { FC } from "react";

import { Dropdown } from "../../../components/Dropdown";
import { SAgeDescription, SAgeDropdownWrapper } from "./styles";
import { TAgeDropdownProps } from "../../../interfaces/features/SearchPage/filters/TAgeDropdownProps";
import { AGE_DATA } from "../../../constants";

export const AgeDropdown: FC<TAgeDropdownProps> = ({
  handleChange,
  value,
  description,
}) => {
  return (
    <SAgeDropdownWrapper>
      <SAgeDescription>{description}</SAgeDescription>
      <Dropdown dropdownItems={AGE_DATA} handleChange={handleChange} value={value} width="100px"/>
    </SAgeDropdownWrapper>
  );
}
