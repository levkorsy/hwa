// import axios from 'axios'
import {single} from "../../dev/dump"; ////ONLY for dev
import {fiveDays} from "../../dev/dump"; ////ONLY for dev

export async function getMainLocationData({ commit, state }) {
    try {
        //TODO remove in deployment
        setTimeout(()=>{
            console.log(state)
            commit("main/setCurrentLocationData", single, { root: true });
        }, 1000)
        // let url = `${state.url}${state.urlSingle}/${state.currentLocationId}?apikey=${state.apiKey}&language=${state.language}&metric=true`
        // axios.get(`${url}`).then(data=>{
        //     commit("main/setCurrentLocationData", data.data, { root: true });
        // })

    } catch (e) {
        console.log(e)
    }
}
export async function getMainLocationDataFiveDays({ commit, state }) {
    try {
        //TODO remove in deployment
        setTimeout(()=>{
            console.log(state)
            commit("main/setCurrentLocationDataFiveDays", fiveDays, { root: true });
        }, 1000)
        // let url = `${state.url}${state.urlFiveDays}/${state.currentLocationId}?apikey=${state.apiKey}&language=${state.language}&metric=true`
        // axios.get(`${url}`).then(data=>{
        //     commit("main/setCurrentLocationDataFiveDays", data.data, { root: true });
        // })
      } catch (e) {
        console.log(e)
    }
}
