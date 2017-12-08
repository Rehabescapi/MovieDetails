import {getQuery, getActiveList, getInitialList, fetchingData} from 'config/api'
import {configureCard} from 'config/utils'
import { cycleGenre, handleChange} from 'redux/modules/genreList'


const ADD_MOVIE = 'ADD_MOVIE'

const FETCHING_DATA ="FETCHING_DATA";//
const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS'//
const FETCHING_DATA_ERROR = 'FETCHING_DATA_ERROR'

const parsingData = 'PARSING_DATA'
const parsingDataSuccess = 'PARSING_DATA_SUCCESS'


const InitialState = {
    isFetching: false,
    hasErrors: false,
    movies:{},
    genreState: [],
}

export function initialList (){
  
    return function action(dispatch) {
       dispatch(DataFetchin())
        
       fetch('http://localhost:3004/results')
        .then((response) =>  response.json())
        .then(function(data){
            
           ( data).map(function(element) { 
              
             
                dispatch( AddMovie( configureCard(element)))
            
        })
        dispatch(DataFetchingSuccess())
        dispatch(cycleGenre())
    })
       
       
        .catch((error)=>console.log(error))
    }
}   


export function DataFetchin () {
    return {
        type : FETCHING_DATA,

    }
}
export function DataFetchingSuccess () {
    return {
        type : FETCHING_DATA_SUCCESS,

    }
}


export function AddMovie(card) {
   
    return {
        type : ADD_MOVIE,
        card
    }
}


export default function movieList (state = InitialState , action ){
   
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
              movies:{
                  ...state.movies,
                 [action.card.id] :action.card
              
             } }
        case FETCHING_DATA:
            return{...state, isFetching:true}
        case FETCHING_DATA_SUCCESS:
       
            return {...state, isFetching : false}


        default :
        return state
    }
}