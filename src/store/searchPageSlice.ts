import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { ISpecialist } from "../interfaces/api/ISpecialist";

export interface ISearchPageState {
  specialistsList: ISpecialist[];
}

const initialState: ISearchPageState = {
  specialistsList: [],
};

const searchPageSlice = createSlice({
  name: "searchPage",
  initialState,
  reducers: {
    updateSpecialistsList: (
      state: ISearchPageState,
      action: PayloadAction<ISpecialist[]>
    ): void => {
      state.specialistsList = [...state.specialistsList, ...action.payload];
    },

    replaceSpecialistsList: (
      state: ISearchPageState,
      action: PayloadAction<ISpecialist[]>
    ): void => {
      state.specialistsList = action.payload;
    },
  },
});

export const selectSpecialistsList = (state: RootState): ISpecialist[] =>
  state.searchPageState.specialistsList;


export const {
  updateSpecialistsList,
  replaceSpecialistsList,
} = searchPageSlice.actions;

export default searchPageSlice.reducer;
