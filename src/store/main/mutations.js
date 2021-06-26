export const setCurrentLocationData = (state, payload) => {
    state.currentLocationData.single = payload;
};
export const setCurrentLocationDataFiveDays = (state, payload) => {
    state.currentLocationData.fiveDays = payload;
};
export const setFavorites = (state, payload) => {
    state.favorites = payload;
};
