import axios from 'axios'

export async function getMainLocationData({ commit, state }) {
    try {
        let url = `${state.url}${state.urlSingle}/${state.currentLocationId}?apikey=${state.apiKey}&language=${state.language}&metric=true`

        axios.get(`${url}`).then(data=>{
            commit("main/setCurrentLocationData", data.data, { root: true });
        })
    } catch (e) {
        console.log(e)
    }
}
export async function getMainLocationDataFiveDays({ commit, state }) {
    try {
        let url = `${state.url}${state.urlFiveDays}/${state.currentLocationId}?apikey=${state.apiKey}&language=${state.language}&metric=true`
        axios.get(`${url}`).then(data=>{
            commit("main/setCurrentLocationDataFiveDays", data.data, { root: true });
        })
      } catch (e) {
        console.log(e)
    }
}
