const state = {
  name: window.localStorage.getItem('nowNm') || '杭州',
  id: window.localStorage.getItem('nowId') || 330100
}

const actions = {

}

const mutations = {
  CITY_INFO (state, payload) {
    state.name = payload.name
    state.id = payload.id
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
