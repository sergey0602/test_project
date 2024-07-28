import { FC } from "react";

import { AgeDropdown } from "./AgeDropdown";
import { SDropdownHeader, SDropdownHeaderWrapper, SAgeDropdownsWrapper } from "./styles";
import { IAgeFilterProps } from "../../../interfaces/features/SearchPage/filters/IAgeFilterProps";
import { FROM, TO, AGE } from "../../../constants";

export const AgeFilter: FC<IAgeFilterProps> = ({
  handleFromChange,
  handleToChange,
  fromValue,
  toValue,
}) => {
  return (
    <SDropdownHeaderWrapper>
      <SDropdownHeader>{AGE}</SDropdownHeader>
      <SAgeDropdownsWrapper>
        <AgeDropdown handleChange={handleFromChange} value={fromValue} description={FROM} />
        <AgeDropdown handleChange={handleToChange} value={toValue} description={TO} />
      </SAgeDropdownsWrapper>
    </SDropdownHeaderWrapper>
  );
}
