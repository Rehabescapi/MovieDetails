import {getQuery } from 'config/api'
import {getGenreList} from 'config/constants'

import {configureGenre} from 'config/utils'





const ADD_GENRE ='ADD_GENRE'
const ADD_TO_GENRE = 'ADD_TO_GENRE'
const IS_UPDATING = 'IS_UPDATING'
const IS_UPDATING_SUCCESS = 'IS_UPDATING_SUCCESS'
const IS_UPDATING_FAILURE = 'IS_UPDATING_FAILURE'

const CEMENT_GENRE = 'CEMENT_GENRE'
const CEMENT_GENRE_SUCCESS = 'CEMENT_GENRE_SUCCESS'


const initialState = {
   isFetching : false,
   isUpdating : false,
    genres : {}
}
var initialGenre = {
    id : '',
    genre : '',
    location : 0,
    hasquota : false,
    isFetching : false,
    movies : [1337,1338],
    count  : 0
}

 
 export function initialGenre(){
     const list = getGenreList()
    return  function action(dispatch, getState) {
      
    list.forEach(function( key) {
    
        dispatch(addToGenre(configureGenre(key)))
       
    
 })
 
}}

export function cycleGenre () {
  
    return function action (dispatch, getState){
        let genres = getState().genreList.genres
        let movies = getState().movieList.movies
        movies.forEach(function (movie) {
            movie.genre_ids.forEach(function (genreNum){
                    if(genres[genreNum]) {
                        //for now brute force solution to achieve mvp
                       dispatch(attatchToGenre(movie.id, genreNum))
                    }})
                }) 
        
    }
}

 export function addToGenre (genreL = initialGenre) {
    return {type : ADD_GENRE,
        key : genreL.id,
        genre : genreL}
 }

export function attatchToGenre( id, genre)
{
    console.log(genre)
    console.log()
    return {
        type : ADD_TO_GENRE,
        genreId : genre,
        movieId : id
    }
}




export default function genreList (state = initialState, action ) {
    switch (action.type) {
        case ADD_GENRE:
        return {
              genres:{...state.genres, 
                 [ action.key]: action.genre
                 
              
               }}
          case ADD_TO_GENRE:
          console.log("ADD_TO_GENRE")
          console.log(action.genreId)
          console.log(state.genres[action.genreId].title)
          console.log(action.movieId)
          console.log(state.genres[action.genreId].movies)
          return {
              genres: {...state.genres,
            [action.genreId] :{
                ...state.genres[action.genreId],
                movies : state.genres[action.genreId].movies.concat(action.movieId)
            }}
          }
       default: 
      return state


    }    }

    function insertItem(array, action) {
        let newArray = array.slice();
        newArray.splice(action.index, 0, action.item);
        return newArray;
    }
    