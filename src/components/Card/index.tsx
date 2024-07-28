import { FC } from "react";

import statusPath from "../../assets/status.svg";
import {
  SCard,
  SCardMedia,
  SCardContent,
  SPersonalInfo,
  SStatus,
  STopics,
  SSubjectName,
  SLastTime,
  SRating,
  SRatingText,
  SRatingValue,
} from "./styles";
import { getLastVisitTime } from "../../utils/getLastVisitTime";
import { ICardProps } from "../../interfaces/components/Card/ICardProps";
import { RATING, NEW } from "../../constants";

const subjectStyle = { opacity: 0.5 };

export const Card: FC<ICardProps> = ({ data }) => {
  const {
    defaultSubjectName,
    rating,
    subjectsCount,
    photoUrl,
    name,
    age,
    onlineStatus,
    lastActivityTime,
    sex
  } = data;

  const ratingText: string = RATING.toUpperCase();
  const ratingValue: string = rating === 0 ? NEW : `${rating}`;
  const nameAndAge: string = `${name}, ${age}`;
  const status: JSX.Element | null = onlineStatus === 2 ? <SStatus src={statusPath} alt="status"/> : null;
  const additionalSubjects: string = `и ещё ${subjectsCount} темы`;
  const wasLastTime: string = `${sex === 1 ? "Был" : "Была"} ${getLastVisitTime(lastActivityTime)}`;

  return (
    <SCard>
      <SCardMedia image={photoUrl} title="photo">
        <SRating>
          <SRatingText>{ratingText}</SRatingText>
          <SRatingValue rating={rating}>{ratingValue}</SRatingValue>
        </SRating>
      </SCardMedia>
      <SCardContent>
        <SPersonalInfo>
          {nameAndAge}
          {status}
        </SPersonalInfo>
        <STopics>
          <SSubjectName>{defaultSubjectName}</SSubjectName>
          {"\u00A0"}
          {subjectsCount ? <SSubjectName sx={subjectStyle}>{additionalSubjects}</SSubjectName> : null}
        </STopics>
        {onlineStatus === 1 ? <SLastTime>{wasLastTime}</SLastTime> : null}
      </SCardContent>
    </SCard>
  );
}
