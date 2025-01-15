// import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
  },
});

// const reducers = combineReducers({
//   campers: campersReducer,
//   filters: filtersReducer,
// });

// export const store = configureStore({
//   reducer: reducers,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
