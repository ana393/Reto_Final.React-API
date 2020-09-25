import { apiActions } from "../action/actionsDef";

const initState = {
  Genre: [],
};

const movieReducer = (state = initState, action) => {
  console.log("reducer action: ", action, state);
  switch (action.type) {
    case apiActions.GENRE:
      return {
        ...state,
        Genre: action.payload,
      };
    default:
      return state;
  }
};
export default movieReducer;
