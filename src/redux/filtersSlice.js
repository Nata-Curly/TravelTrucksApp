import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [],
  vehicleType: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    locationFilter(state, { payload }) {
      // return {
      //   ...state,
      //   location: payload,
      // };
      state.location = payload;
    },
    equipmentFilter: (state, { payload }) => {
      const equipment = payload;
      if (state.equipment.includes(equipment)) {
        state.equipment = state.equipment.filter((item) => item !== equipment);
      } else {
        state.equipment.push(equipment);
      }
    },
    vehicleTypeFilter: (state, { payload }) => {
      state.vehicleType = payload;
    },
  },
});

export const { locationFilter, equipmentFilter, vehicleTypeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
