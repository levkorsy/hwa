import * as actions from "./actions";
import * as mutations from "./mutations";

export default {
    namespaced: true,

    state: {
        url: 'test',
    },

    actions,
    mutations,

    getters: {
        getUrl: state => {
            return state.url;
        },


    }
};
