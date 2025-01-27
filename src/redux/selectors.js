export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.selectedItem;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectLocation = (state) => state.filters.location;
export const selectEquipment = (state) => state.filters.equipment;
export const selectVehicleType = (state) => state.filters.vehicleType;
export const selectFilters = (state) => state.filters;