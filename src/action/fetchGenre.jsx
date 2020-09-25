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
//Fetch first 10 popular movies 
export const fetchTenPopular = async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/movie/popular?api_key=${apiKey}&language=en-US-1`);

    const posterURL = 'https://image.tmdb.org/t/p/w500'
    const ten = data['results'].slice(0, 10).map((t) => ({
      id: t['id'],
      title: t['original_title'],
      backPoster: posterURL + t['backdrop_path'],
      poster: posterURL + t['poster_path']
    }))
    return dispatch({
      type: apiActions.TENPOPULAR,
      payload: ten,
    });
  } catch (error) {
    console.error(error)
  }
}
