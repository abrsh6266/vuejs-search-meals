import { createStore } from "vuex";
import * as state from "./state";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";
const store = createStore({
  state,
  actions,
  mutations,
  getters,
});

export default store;
