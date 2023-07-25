import { createStore } from "vuex";
import  companies  from "./companies";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules: {
    companies,
  },
  plugins: [createPersistedState()],

});

export default store;