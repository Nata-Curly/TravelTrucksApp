export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.selectedItem;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;