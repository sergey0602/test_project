import { useState, useEffect } from "react";
import { SelectChangeEvent } from '@mui/material/Select';
import { useSearchParams } from "react-router-dom";

import { Button } from "../../../components/Button";
import { FindPsychologistDropdown } from "./FindPsychologistDropdown";
import { QualificationDropdown } from "./QualificationDropdown";
import { RatingDropdown} from "./RatingDropdown";
import { TopicDropdown } from "./TopicDropdown";
import { AgeFilter } from "./AgeFilter";
import {
  FIND_PSYCHOLOGIST_DATA,
  QUALIFICATION_DATA,
  RATING_DATA,
  TOPIC_DEFAULT_VALUE,
  AGE_DATA,
} from "../../../constants";
import { SFiltersWrapper, SSubmitWrapper } from "./styles";

export const Filters = () => {
  const [, setSearchParams] = useSearchParams();

  const [
    findPsychologistValue,
    setFindPsychologistValue
  ] = useState(FIND_PSYCHOLOGIST_DATA[0].value);
  const [
    qualificationValue,
    setQualificationValue
  ] = useState(QUALIFICATION_DATA[0].value);
  const [ratingValue, setRatingValue] = useState(RATING_DATA[0].value);
  const [topicValue, setTopicValue] = useState(TOPIC_DEFAULT_VALUE.value);
  const [ageFromValue, setAgeFromValue] = useState(AGE_DATA[0].value);
  const [ageToValue, setAgeToValue] = useState(AGE_DATA[AGE_DATA.length - 1].value);

  const handleFindPsychologistChange = (event: SelectChangeEvent<unknown>): void => {
    setFindPsychologistValue(event.target.value as string);
  };

  const handleQualificationChange = (event: SelectChangeEvent<unknown>): void => {
    setQualificationValue(event.target.value as string);
  };

  const handleRatingChange = (event: SelectChangeEvent<unknown>): void => {
    setRatingValue(event.target.value as string);
  };

  const handleTopicChange = (event: SelectChangeEvent<unknown>): void => {
    setTopicValue(event.target.value as string);
  };

  const handleAgeFromChange = (event: SelectChangeEvent<unknown>): void => {
    setAgeFromValue(event.target.value as string);
  };

  const handleAgeToChange = (event: SelectChangeEvent<unknown>): void => {
    setAgeToValue(event.target.value as string);
  };

  const applyQueryParams = (): void => {
    setSearchParams({
      sex: findPsychologistValue,
      ageFrom: ageFromValue,
      ageTo: ageToValue,
      subjectId: topicValue,
      profSpeciality: qualificationValue,
      rating: ratingValue,
      page: "1",
    });
  }

  useEffect((): void => {
    applyQueryParams();
  }, []);

  return (
    <SFiltersWrapper>
      <FindPsychologistDropdown
        value={findPsychologistValue}
        handleChange={handleFindPsychologistChange}
      />
      <AgeFilter
        fromValue={ageFromValue}
        toValue={ageToValue}
        handleFromChange={handleAgeFromChange}
        handleToChange={handleAgeToChange}
      />
      <TopicDropdown
        value={topicValue}
        handleChange={handleTopicChange}
      />
      <QualificationDropdown
        value={qualificationValue}
        handleChange={handleQualificationChange}
      />
      <RatingDropdown
        value={ratingValue}
        handleChange={handleRatingChange}
      />
      <SSubmitWrapper>
        <Button onClick={applyQueryParams} />
      </SSubmitWrapper>
    </SFiltersWrapper>
  );
}
