import { getGenreList } from 'config/constants'
import { addGenreMovie } from 'redux/modules/movieList'
import { configureGenre, tempGenre } from 'config/utils'

const ADD_GENRE = 'ADD_GENRE'
const ADD_TO_GENRE = 'ADD_TO_GENRE'
const IS_UPDATING = 'IS_UPDATING'
const IS_UPDATING_SUCCESS = 'IS_UPDATING_SUCCESS'
// const IS_UPDATING_FAILURE = 'IS_UPDATING_FAILURE'

const initialState = {
  isFetching: false,
  isLoading: true,
  isUpdating: false,
  genres: {}
}
/*
var initialGenreState = {
  id: '',
  genre: '',
  location: 0,
  hasquota: false,
  isFetching: false,
  movies: [],
  count: 0
} */

export function initialGenre () {
  const list = getGenreList()
  return function action (dispatch, getState) {
    list.forEach(function (key) {
      if (key.active) {
        dispatch(addToGenre(configureGenre(key)))
      }
    })
  }
}

export function cycleGenre () {
  return function action (dispatch, getState) {
    dispatch(isUpdating())
    let genres = getState().genreList.genres
    let movies = Object.values(getState().movieList.movies)

    let tempG = {}
    movies.forEach(function (movie) {
      movie.genre_ids.forEach(function (genreNum) {
        if (genres[genreNum] && !genres[genreNum].movies.includes(movie.id) && !genres[genreNum].hasquota) {
          tempG = tempGenre(tempG, movie.id, genreNum)
        }
      })
    })
    // send attach to Genere for each object map
    for (const [key, value] of Object.entries(tempG)) {
      dispatch(attatchToGenre(value, key))
    }
    dispatch(isUpdatingSuccess())
    let updateMap = Object.values(getState().genreList.genres)
    let updateList = {}
    updateMap.forEach((genRef) => {
      if (!genRef.hasquota) { updateList[genRef.id] = genRef.count }
    })

    dispatch(addGenreMovie(updateList))
  }
}

export function isUpdating () {
  return {type: IS_UPDATING}
}
export function isUpdatingSuccess () {
  return {type: IS_UPDATING_SUCCESS}
}
export function addToGenre (genreL = initialGenre) {
  return {type: ADD_GENRE,
    key: genreL.id,
    genre: genreL}
}

export function attatchToGenre (id, genre) {
  return {
    type: ADD_TO_GENRE,
    genreId: genre,
    movieId: id
  }
}

export default function genreList (state = initialState, action) {
  switch (action.type) {
    case ADD_GENRE:
      return {
        ...state,
        genres: {...state.genres,
          [action.key]: action.genre

        }}
    case ADD_TO_GENRE:
      return {
        ...state,
        genres: {...state.genres,
          [action.genreId]: {
            ...state.genres[action.genreId],
            movies: state.genres[action.genreId].movies.concat(action.movieId),
            hasquota: (state.genres[action.genreId].movies.length + action.movieId.length) >= 7,
            count: state.genres[action.genreId].movies.length + action.movieId.length
          }}
      }

    case IS_UPDATING:
      return {
        ...state,
        isLoading: true
      }
    case IS_UPDATING_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}
