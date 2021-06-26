import * as actions from "./actions";
import * as mutations from "./mutations";

export default {
    namespaced: true,

    state: {
        urlSingle: '/currentconditions/v1/',
        urlFiveDays: '/forecasts/v1/daily/5day/',
        url: process.env.VUE_APP_MAIN_URL,
        apiKey: process.env.VUE_APP_API_KEY,
        currentLocationId: 215854,
        currentLocationData: {
            single:[],
            fiveDays:{}
        },
        language: 'en-us'
    },

    actions,
    mutations,

    getters: {
        // getFiveDays: state => {
        //     return state.currentLocationData.fiveDays;
        // },


    }
};
