// store/filtersSlice.js
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
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleEquipment: (state, action) => {
      const equipment = action.payload;
      if (state.equipment.includes(equipment)) {
        state.equipment = state.equipment.filter((item) => item !== equipment);
      } else {
        state.equipment.push(equipment);
      }
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
  },
});

export const { setLocation, toggleEquipment, setVehicleType } =
  filtersSlice.actions;
export default filtersSlice.reducer;
