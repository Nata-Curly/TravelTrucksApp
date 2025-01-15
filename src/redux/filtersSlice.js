import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    locationFilter(state, { payload }) {
      return {
        ...state,
        location: payload,
      };
    },
  },
});

export const { locationFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
