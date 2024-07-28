import { FC } from "react";

import { useGetTopicsQuery } from "../../../store/searchPageApi";

import { Dropdown } from "../../../components/Dropdown";
import { SDropdownHeader, SDropdownHeaderWrapper } from "./styles";
import { TCustomDropdownProps } from "../../../interfaces/features/SearchPage/filters/TCustomDropdownProps";
import { TOPIC } from "../../../constants";

export const TopicDropdown: FC<TCustomDropdownProps> = ({
  handleChange,
  value,
}) => {
  const { data } = useGetTopicsQuery();

  return (
    <SDropdownHeaderWrapper>
      <SDropdownHeader>{TOPIC}</SDropdownHeader>
      <Dropdown dropdownItems={data || []} handleChange={handleChange} value={value}/>
    </SDropdownHeaderWrapper>
  );
}
