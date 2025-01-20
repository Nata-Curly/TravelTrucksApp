import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [],
  vehicleType: "",
  appliedFilters: {
    location: "",
    equipment: [],
    vehicleType: "",
  }
};


const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    locationFilter(state, { payload }) {
      state.location = payload;
    },
    equipmentFilter(state, { payload }) {
      if (state.equipment.includes(payload)) {
        state.equipment = state.equipment.filter((item) => item !== payload);
      } else {
        state.equipment.push(payload);
      }
    },
    vehicleTypeFilter(state, { payload }) {
      state.vehicleType = payload;
    },
    applyFilters(state) {
      state.appliedFilters = {
        location: state.location,
        equipment: [...state.equipment],
        vehicleType: state.vehicleType,
      };
    },
  },
});

export const {
  locationFilter,
  equipmentFilter,
  vehicleTypeFilter,
  applyFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

