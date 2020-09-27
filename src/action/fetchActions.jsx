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
    console.log('Genres:', movie)
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
    const posterURL = 'https://image.tmdb.org/t/p/original'
    const ten = data['results'].slice(0, 10).map((t) => ({
      id: t['id'],
      title: t['original_title'],
      backPoster: posterURL + t['backdrop_path'],
    }))

    return dispatch({
      type: apiActions.MOVIES,
      payload: ten,
    });
  } catch (error) {
    console.error(error)
  }
}

// display movies according to genre
export const fetchByGenres = async (dispatch, ID) => {
  try {
    const { data } = await axios.get(`${url}/discover/movie?api_key=${apiKey}&language=en-US-1&with_genres=${ID}`);
    const posterURL = 'https://image.tmdb.org/t/p/original';
    const movieList = data['results'].map((l) => ({
      id: l['id'],
      genreID: l['genre_ids'],
      title: l['original_title'],
      overview: l['overview'],
      rating: l['vote_average'],
      Poster: posterURL + l['poster_path'],
    }))
    console.log('ByGenres:', movieList)
    return dispatch({
      type: apiActions.MOVIE_DETAILS,
      payload: movieList,
    });

  } catch (error) {
    console.error(error)
  }
}

//display movie details
export const fetchMovieDetails = async (dispatch, id) => {
  try {
    const { data } = await axios.get(`${url}/discover/movie?api_key=${apiKey}&language=en-US-1&with${id}`);
    const posterURL = 'https://image.tmdb.org/t/p/original';
    const movieDetails = data['results'].map((l) => ({
      id: l['id'],
      title: l['original_title'],
      overview: l['overview'],
      rating: l['vote_average'],
      Poster: posterURL + l['poster_path'],
    }))
    return dispatch({
      type: apiActions.MOVIES,
      payload: movieDetails,
    });

  } catch (error) {
    console.error(error)
  }
}

//display movie according to the searched word
export const fetchBySearch = async (dispatch, word) => {
  try {
    const { data } = await axios.get(`${url}/search/movie?api_key=${apiKey}&language=en-US-1&query=${word}`);
    const posterURL = 'https://image.tmdb.org/t/p/original';
    const movieList = data['results'].map((l) => ({
      id: l['id'],
      title: l['original_title'],
      overview: l['overview'],
      rating: l['vote_average'],
      backPoster: posterURL + l['backdrop_path'],
    }))
    console.log('movieList:', movieList)
    return dispatch({
      type: apiActions.MOVIE_DETAILS,
      payload: movieList,
    });

  } catch (error) {
    console.error(error)
  }
}
