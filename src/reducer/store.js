import { createStore } from "redux";

import movieReducer from "./reducer";

const store = createStore(movieReducer);
store.getState();

export default store;
