import Button from "@mui/material/Button";
import styled from "@mui/system/styled";

import { IButtonStyleProps } from "../../interfaces/components/Button/IButtonStyleProps";

export const SButton = styled(Button, {
  shouldForwardProp: (prop) =>
    prop !== "backgroundColor" &&
    prop !== "hoverBackgroundColor" &&
    prop !== "width" &&
    prop !== "height" &&
    prop !== "color" &&
    prop !== "fontWeight" &&
    prop !== "fontSize",
})<IButtonStyleProps>(({
  backgroundColor = "#FF006B",
  hoverBackgroundColor = "#FF008B",
  width = "19.5rem",
  height = "3.25rem",
  color = "#FFFFFF",
  fontWeight = 700,
  fontSize = "1.25rem"
}) => ({
  borderRadius: "0.25rem",
  backgroundColor,
  width,
  height,
  color,
  fontWeight,
  fontSize,
  textTransform: "none",

  "&:hover": {
    backgroundColor: hoverBackgroundColor,
  },
  "&:focus": {
    outline: "none",
  },
}));
