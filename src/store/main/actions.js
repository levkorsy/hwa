export async function getTaskDictionary({ commit, state }) {
    try {
        console.log(commit, state)
        // commit("tasks/setTaskDictionary", response.data, { root: true });
        // return response;
    } catch (e) {
        console.log(e)
    }
}
