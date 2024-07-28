import { ISpecialistFromApi } from "./ISpecialistFromApi";

export interface ISpecialistsResponse {
  data: {
    items: ISpecialistFromApi[];
    totalCount: number;
  }
}
