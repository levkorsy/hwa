import Vue from "vue";
import Vuex from 'vuex'

import Router from "vue-router";
import Home from "../components/layout/Home";
import NotFound from "../components/layout/NotFound";
import Favorites from "../components/layout/favorites/Favorites";
import Axios from 'axios'

Vue.use(Vuex)
Vue.prototype.$http = Axios;
// import store from "../store";

Vue.use(Router);
export default new Router({
    mode: "history",
    linkActiveClass: "active",
    routes: [
        {
            path: "*",
            component: NotFound
        },

        {
            path: "/",
            name: "Main",
            component: Home,
        },
        {
            path: "/favorites",
            name: "Favorites",
            component: Favorites,
        },
    ]
});
