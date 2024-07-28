import { combineReducers, UnknownAction } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { searchPageApi } from "./searchPageApi";
import searchPageReducer, { ISearchPageState } from "./searchPageSlice";

// RTK Query
const apis = [searchPageApi];

export const getApiReducers = () => {
  const apiReducers = {};
  apis.forEach((api) => {
    // @ts-ignore
    apiReducers[api.reducerPath] = api.reducer;
  });
  return apiReducers;
};

export const getApiMiddlewares = () => {
  return apis.map((api) => api.middleware);
};

// Redux
const apiReducers = getApiReducers();
const reducers = combineReducers({
  ...apiReducers,
  searchPageState: searchPageReducer,
});

type TReducers = ReturnType<typeof reducers>;

const rootReducer = (state: { searchPageState: ISearchPageState; } | Partial<{
  searchPageState: ISearchPageState | undefined;
}> | undefined, action: UnknownAction): TReducers => {
  return reducers(state, action);
};


const apiMiddlewares = getApiMiddlewares();

export const store = configureStore({
  reducer: rootReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiMiddlewares),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
