export const setCurrentLocationData = (state, payload) => {
    state.currentLocationData.single = payload;
};
export const setCurrentLocationDataFiveDays = (state, payload) => {
    state.currentLocationData.fiveDays = payload;
};
export const setFavorites = (state, payload) => {
    state.favorites = payload;
};
export const setFavoritesData = (state, payload) => {
    state.favoritesData = payload;
};
export const setCurrentLocationId = (state, payload) => {
    state.currentLocationId = payload;
};

export const setSelectedSearchResult = (state, payload) => {
    state.selectedSearchResult = payload;
};
