//import { apiActions } from "../action/actionsDef";

const initState = [];

const movieReducer = (state = initState, action) => {
  console.log("reducer action: ", state);
  return state;
};
export default movieReducer;
