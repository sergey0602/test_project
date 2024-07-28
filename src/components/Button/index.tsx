import { FC } from "react";

import { SButton } from "./styles";
import { IButtonProps } from "../../interfaces/components/Button/IButtonProps";
import { BUTTON_DEFAULT_TEXT } from "../../constants";

export const Button: FC<IButtonProps> = ({ text = BUTTON_DEFAULT_TEXT, onClick }) => {
  return (
    <SButton onClick={onClick}>{text}</SButton>
  );
}
