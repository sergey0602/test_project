import notFoundPath from "../../assets/notFound.svg";

import { SNotFoundText, SNotFoundWrapper, SNotFoundImage } from "./styles";
import { NOT_FOUND_FIRST_PART_OF_TEXT, NOT_FOUND_SECOND_PART_OF_TEXT } from "../../constants";

export const CardsNotFound = () => {
  return (
    <SNotFoundWrapper>
      <SNotFoundImage src={notFoundPath} alt="Not found" />
      <SNotFoundText>{NOT_FOUND_FIRST_PART_OF_TEXT}</SNotFoundText>
      <SNotFoundText>{NOT_FOUND_SECOND_PART_OF_TEXT}</SNotFoundText>
    </SNotFoundWrapper>
  );
}
