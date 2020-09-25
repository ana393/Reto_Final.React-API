import { apiActions } from "./actionsDef";
import axios from "axios";
import { apiKey, url } from "./apikey";

export const fetchGenres = async (dispatch) => {

  try {
    const { data } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}&language=en-US-1`);
    const movie = data['genres'].map((g) => ({
      id: g['id'],
      name: g['name']
    }))
    console.log('Available Genres', movie)
    return dispatch({
      type: apiActions.GENRE,
      payload: movie,
    });
  } catch (error) {
    console.error(error);
  }
};
