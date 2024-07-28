import Select from "@mui/material/Select";
import styled from "@mui/system/styled";
import MenuItem from '@mui/material/MenuItem';

interface ISelectStyleProps {
  width?: string;
  height?: string;
  color?: string;
  fontWeight?: number;
  fontSize?: string;
  value: string;
}

export const SMenuItem = styled(MenuItem)(() => ({
  color: "#000000",
  fontWeight: 500,
  fontSize: "1.25rem",
}));

export const SSelect = styled(Select, {
  shouldForwardProp: (prop) =>
    prop !== "hoverBackgroundColor" &&
    prop !== "width" &&
    prop !== "height" &&
    prop !== "color" &&
    prop !== "fontWeight" &&
    prop !== "fontSize",
})<ISelectStyleProps>(({
  width = "19.5rem",
  height = "3.25rem",
  color = "#000000",
  fontWeight = 500,
  fontSize = "1.25rem"
}) => ({
  borderRadius: "0.125rem",
  borderColor: "#CCCCCC",
  width,
  height,
  color,
  fontWeight,
  fontSize,

  "& .MuiSelect-icon": {
    color,
    paddingRight: "0.375rem",
  },
  "& .MuiSelect-iconOpen": {
    right: "0.875rem",
  },
}));
