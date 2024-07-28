import { FC } from "react";

import { Card } from "../../../components/Card";
import { ICardsProps } from "../../../interfaces/features/SearchPage/cards/ICardsProps";
import { SCardsWrapper, SSpinner } from "./styles";

export const Cards: FC<ICardsProps> = ({ cardData }) => {
  if (!cardData) { return <SSpinner /> }

  const cards = cardData?.map((card) => {
    return (
      <Card key={card.lastActivityTime} data={card} />
    );
  });

  return (
    <SCardsWrapper>{cards}</SCardsWrapper>
  );
}
