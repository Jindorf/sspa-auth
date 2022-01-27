import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: {
      namespaced: true,
      state: {
        user: null,
        token: null,
      },
      actions: {
        login({ commit }, user) {
          commit("login", user);
        },
      },
      mutations: {
        login(state, user) {
          state.user = user;
        },
      },
    },
  },
});
