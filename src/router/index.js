import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import Favorites from "../components/Favorites";
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
        // {
        //     path: "/favorites",
        //     name: "Favorites",
        //     component: Favorites,
        // },
    ]
});
