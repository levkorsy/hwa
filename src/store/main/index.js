import * as actions from "./actions";
import * as mutations from "./mutations";

export default {
    namespaced: true,

    state: {
        urlSingle: '/currentconditions/v1/',
        urlFiveDays: '/forecasts/v1/daily/5day',
        searchUrl: '/locations/v1/cities/autocomplete',
        url: process.env.VUE_APP_MAIN_URL,
        apiKey: process.env.VUE_APP_API_KEY,
        currentLocationId: 215854,
        currentLocationData: {
            single:[],
            fiveDays:{}
        },
        language: 'en-us',
        favorites:[],
        favoritesData:[],
        selectedSearchResult: {
            id: 215854,
            name: 'Tel-Aviv',
            country: 'Israel'
        },
        measureUnits:'Imperial',
        geoLocation: null,
        errorMsg: null
    },

    actions,
    mutations,

    getters: {
       searchResults: state =>  state.selectedSearchResult,
       checkIfFavorite: state =>   {
          return  state.favorites.some(i => i.id == state.currentLocationId)}

    }
};
