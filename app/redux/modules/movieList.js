import { getFromGenre } from 'config/api'
import { configureCard } from 'config/utils'
import { cycleGenre } from 'redux/modules/genreList'

const ADD_MOVIE = 'ADD_MOVIE'
const CLEAR_API = 'CLEAR_API'
const FETCHING_DATA = 'FETCHING_DATA'//
const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'//
const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR'

const SET_API_NEED = 'SET_API_NEED'

const InitialState = {
  isFetching: false,
  hasErrors: false,
  movies: {},
  genreState: []
}

export function initialList (location = 'http://localhost:3004/db') {
  return function action (dispatch, getState) {
    dispatch(DataFetchin())

    var myHeaders = new Headers()

    var myInit = { method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default' }
    fetch(location, myInit)
      .then((response) => response.json())
      .then(function (data) {
        let mson = data.results

        mson.map(function (element) {
          dispatch(AddMovie(configureCard(element)))
        })
        dispatch(DataFetchingSuccess())
        dispatch(cycleGenre())
      })

      .catch((error) => console.warn(error))
  }
}

export function addGenreMovie (genreList) {
  var x = true
  if (Object.keys(genreList).length === 0) { return function action (dispatch) {} }

  let min = Object.keys(genreList).reduce(function (a, b) { return genreList[a] < genreList[b] ? a : b })

  return function action (dispatch) {
    if (x) { dispatch(setApiGoal(getFromGenre(min))) } else { dispatch(setApiGoal()) }
  }
  // initialList(getFromGenre(min))
}

export function dataFetchingError (error) {
  return {type: FETCHING_DATA_ERROR,
    payload: error }
}
export function clearApi () {
  return {
    type: CLEAR_API
  }
}

export function setApiGoal (genId = {}) {
  return {
    type: SET_API_NEED,
    payload: genId
  }
}

export function DataFetchin () {
  return {
    type: FETCHING_DATA

  }
}
export function DataFetchingSuccess () {
  return {
    type: FETCHING_DATA_SUCCESS

  }
}

export function AddMovie (card) {
  return {
    type: ADD_MOVIE,
    card
  }
}

export default function movieList (state = InitialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.card.id]: action.card

        } }
    case FETCHING_DATA:
      return {...state, isFetching: true}
    case FETCHING_DATA_SUCCESS:

      return {...state, isFetching: false}
    case SET_API_NEED :
    { return {...state, apiNeeded: action.payload} }
    case CLEAR_API :
    { return {...state, apiNeeded: null } }
    case FETCHING_DATA_ERROR:
    { return {...state,
      isError: true,
      error: action.payload
    } }
    default :
      return state
  }
}
