import * as apiActions from 'config/api'
import {configureDetail} from 'config/utils'

const FETCHING_DETAIL = 'FETCHING_DETAIL'
const FETCHING_DETAIL_SUCCESS = 'FETCHING_DETAIL_SUCCESS'
const FETCHING_DETAIL_ERROR = 'FETCHING_DETAIL_ERROR'
const ADD_DETAIL = 'ADD_DETAIL'
const ADD_CAST_PAYLOAD = 'ADD_CAST_PAYLOAD'

var initialState = {
  isFetching: false,
  moviesdetail: {}

}


export function fetchAndHandleDetail (movieId) {
  return function action (dispatch, getState) {
    dispatch(fetchingDetail())
    let fetchUrl = apiActions.getDetail(movieId)

    var myHeaders = new Headers()
    var myInit = { method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default' }
    fetch(fetchUrl, myInit)
      .then((response) => response.json())
      .then(function (data) {
        dispatch(addDetail(configureDetail(data)))
        dispatch(fetchingDetailSuccess())
      })
  }
}

export function addDetail (detailCard) {
  return {
    type: ADD_DETAIL,
    payload: detailCard
  }
}

export function addCast (castCard, detailId) {
  return {
    type: ADD_CAST_PAYLOAD,
    payload: castCard,
    id: detailId
  }
}

export function fetchingDetail () {
  return {type: FETCHING_DETAIL}
}

export function fetchingDetailSuccess () {
  return {type: FETCHING_DETAIL_SUCCESS}
}

export function fetchingDetailError (error) {
  return {type: FETCHING_DETAIL_ERROR,
    error: error}
}

export default function detailList (state = initialState, action) {
  switch (action.type) {
    case ADD_DETAIL :
      return {...state,
        moviesdetail: {...state.moviesdetail, [action.payload.detailId]: action.payload
        }}

    case FETCHING_DETAIL :
      return { ...state, isFetching: true}
    case FETCHING_DETAIL_SUCCESS :
      return { ...state, isFetching: false}

    case FETCHING_DETAIL_ERROR :
      return { ...state, fetchingError: action.error}

    default :

      return state
  }
}
