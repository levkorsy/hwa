// import axios from 'axios'
import {single} from "../../dev/dump"; ////ONLY for dev
import {fiveDays} from "../../dev/dump"; ////ONLY for dev
import {favorites} from "../../dev/dump"; ////ONLY for dev

export async function getMainLocationData({ commit, state }) {
    try {
        //TODO remove in deployment
        setTimeout(()=>{
            console.log(state)
            commit("main/setCurrentLocationData", single, { root: true });
        }, 1000)

        // let url = `${state.url}${state.urlSingle}${state.currentLocationId}?apikey=${state.apiKey}&language=${state.language}`;
        // axios.get(`${url}`).then(data=>{
        //     commit("main/setCurrentLocationData", data.data, { root: true });
        // })

    } catch (e) {
        console.log(e)
    }
}
export async function getFavoritesData({ commit, state }) {
    try {
        //TODO remove in deployment

        setTimeout(()=>{
            console.log(state)

            commit("main/setFavoritesData", favorites, { root: true })
        }, 1000)

        // if(localStorage.favorites){
        //     let tempFavData = []
        //     console.log(typeof localStorage.favorites,commit, state)
        //     JSON.parse(localStorage.favorites).forEach(item=> {
        //         let url = `${state.url}${state.urlSingle}/${item.id}?apikey=${state.apiKey}&language=${state.language}&metric=true`
        //         axios.get(`${url}`).then(({data})=>{
        //             console.log(data, 'data')
        //             if(data.length){
        //                 let tempObj = data[0]
        //                 tempObj.city = item.name
        //                 tempObj.country = item.country
        //                 console.log(tempObj, "tenpobj")
        //                 tempFavData.push(tempObj)
        //             }
        //
        //         })
        //     })
        //     commit("main/setFavoritesData", tempFavData, { root: true });
        // }
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
        // let url = `${state.url}${state.urlFiveDays}/${state.currentLocationId}?apikey=${state.apiKey}&language=${state.language}&details=true`
        //
        // // let url = `${state.url}${state.urlFiveDays}${state.currentLocationId}?apikey=${state.apiKey}&language=${state.language}&metric=true`;
        // axios.get(`${url}`).then(data=>{
        //     commit("main/setCurrentLocationDataFiveDays", data.data, { root: true });
        // })
      } catch (e) {
        console.log(e)
    }
}
export async function changeFavorites({ commit, state }, data) {
    try {
        let tempFavorites = state.favorites
        //TODO make separate func that will return array
        if(data){
            console.log('in')
            !tempFavorites.some(i => i.id == state.currentLocationId) && tempFavorites.push({id:state.currentLocationId, name: state.selectedSearchResult.name, country: state.selectedSearchResult.country})
               tempFavorites.length && localStorage.setItem('favorites', JSON.stringify(tempFavorites))
        }else{
            console.log('out')
          tempFavorites = tempFavorites.filter(item=>  item.id !== state.currentLocationId)
            !tempFavorites.length && localStorage.removeItem('favorites')
            tempFavorites.length && localStorage.setItem('favorites',  JSON.stringify(tempFavorites))
        }
            commit("main/setFavorites", tempFavorites, { root: true });

      } catch (e) {
        console.log(e)
    }
}

export async function getCurrentLocationId({ commit, state }) {
    try {
        console.log(commit, state, "getCurrentLocationId")
    } catch (e) {
        console.log(e)
    }
}
export async function changeMeasureUnit({ commit }, unit) {
    try {
        commit("setMeasureUnit", unit);
    } catch (e) {
        console.log(e)
    }
}

export async function getFavoritesFromLocalStorage({ commit }) {
    try {
        if(localStorage.getItem('favorites')){
            commit("setFavorites", JSON.parse(localStorage.getItem('favorites')));
        }
    } catch (e) {
        console.log(e)
    }
}