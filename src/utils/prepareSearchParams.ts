import { getValuesFromParams } from "./getValuesFromParams";
import { QUERY_PARAMS_LIST, QUALIFICATION_DATA } from "../constants";

export const prepareSearchParams = (searchParams: URLSearchParams) => {
  const params = getValuesFromParams(searchParams, QUERY_PARAMS_LIST);
  console.log("params", params);

  const requestParams = new URLSearchParams();

  params?.forEach((item) => {
    switch (item.field) {
      case "sex":
      case "subjectId":
        if (item.value) {
          requestParams.append(item.field, item.value);
        }
        break;
      case "ageFrom":
      case "ageTo":
        requestParams.append(item.field, item.value);
        break;
      case "profSpeciality":
        if (item.value) {
          const diploma = QUALIFICATION_DATA.find((item) => item.label === "Диплом психолога");

          diploma?.value === item.value
            ?  requestParams.append("isCertified", "true")
            : requestParams.append("profSpeciality", item.value);
        }
        break;
      case "rating":
        if (item.value) {
          const rating = JSON.parse(item.value);
          requestParams.append("ratingFrom", rating[1]);
          requestParams.append("ratingTo", rating[0]);
        }
        break;
      case "page":
        requestParams.append("limit", "12");
        requestParams.append("offset", `${parseInt(item.value) * 12 - 12}`);
        break;
      default:
    }
  });

  return requestParams;
}
