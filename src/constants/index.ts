import { createAgeItems } from "../utils/createAgeItems";

export const BUTTON_DEFAULT_TEXT = "Показать анкеты";

export const FIND_PSYCHOLOGIST = "Я ищу психолога";
export const FIND_PSYCHOLOGIST_DATA = [
  { value: "", label: "Любого пола" },
  { value: "1", label: "Мужской" },
  { value: "2", label: "Женский" },
];

export const QUALIFICATION = "Квалификация";
export const QUALIFICATION_DATA = [
  { value: "", label: "Все варианты" },
  { value: "1", label: "Консультант" },
  { value: "2", label: "Сексолог" },
  { value: "3", label: "Коуч" },
  { value: "4", label: "Диплом психолога" },
];

export const RATING = "Рейтинг";
export const RATING_DATA = [
  { value: "", label: "Не важен" },
  { value: "[0, 0]", label: "Новые" },
  { value: "[100, 80]", label: "От 100 до 80" },
  { value: "[79, 60]", label: "От 79 до 60" },
  { value: "[59, 40]", label: "От 59 до 40" },
];

export const TOPIC = "Тема";
export const TOPIC_DEFAULT_VALUE = { value: "", label: "Любая тема" };

export const AGE_DATA = createAgeItems(18, 99);
export const AGE = "В возрасте";
export const FROM = "От";
export const TO = "До";

export const SEX = "sex";
export const AGE_FROM = "ageFrom";
export const AGE_TO = "ageTo";
export const SUBJECT_ID = "subjectId";
export const PROF_SPECIALITY = "profSpeciality";
export const RATING_FROM_TO = "rating";
export const PAGE = "page";
export const QUERY_PARAMS_LIST = [
  SEX,
  AGE_FROM,
  AGE_TO,
  SUBJECT_ID,
  PROF_SPECIALITY,
  RATING_FROM_TO,
  PAGE,
];

export const NEW = "NEW";

export const SHOW_MORE = "Показать еще";

export const NOT_FOUND_FIRST_PART_OF_TEXT = "К сожалению, нет анкет";
export const NOT_FOUND_SECOND_PART_OF_TEXT = "с такими параметрами";

