import { apiActions } from "../action/actionsDef";

const initState = {
  Genre: [],
  TenPopular: [],
  MovieDetails: [],
};

const movieReducer = (state = initState, action) => {
  console.log("reducer action: ", action, state);
  switch (action.type) {
    case apiActions.GENRE:
      return {
        ...state,
        Genre: action.payload,
      };

    case apiActions.MOVIES:
      return {
        ...state,
        TenPopular: action.payload,
      };

    case apiActions.MOVIE_DETAILS:
      return {
        ...state,
        MovieDetails: action.payload,
      };

    default:
      return state;
  }
};
export default movieReducer;
