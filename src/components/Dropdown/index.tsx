import { FC, useMemo } from 'react';
import FormControl from '@mui/material/FormControl';
import { GoChevronDown } from "react-icons/go";

import { IDropdownProps } from "../../interfaces/components/Dropdown/IDropdownProps";
import { SSelect, SMenuItem } from "./styles";

export const Dropdown: FC<IDropdownProps> = ({ dropdownItems, value, handleChange, width }) => {
  const menuItems = useMemo(() => {
    return dropdownItems.map((item) => {
      return (
        <SMenuItem key={item.value} value={item.value}>
          {item.label}
        </SMenuItem>
      );
    });
  }, [dropdownItems]);

  return (
    <FormControl>
      <SSelect
        value={value}
        onChange={handleChange}
        displayEmpty
        IconComponent={GoChevronDown}
        width={width}
      >
        {menuItems}
      </SSelect>
    </FormControl>
  )
}
