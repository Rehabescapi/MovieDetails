import {getQuery, getActiveList, getInitialList, fetchingData} from 'config/api'
import {configureCard} from 'config/utils'

const ADD_MOVIE = 'ADD_MOVIE'

const FETCHING_DATA ="FETCHING_DATA";
const fetchingSuccess = 'FETCHING_SUCCESS'
const festingError = 'FETCHING_ERROR'

const parsingData = 'PARSING_DATA'
const parsingDataSuccess = 'PARSING_DATA_SUCCESS'


const InitialState = {
    isFetching: false,
    hasErrors: false,
    movies:[],
}







export function initialList (){
    console.log('pre return')
    return function action(dispatch) {
       dispatch(DataFetchin())
        console.log(' return')
        fetchingData()
        .then(response => {
            return response.json()
        })
        .then(function(data){
            console.log('pre data map')
           Object.keys( data).map((element) => ( dispatch( AddMovie( configureCard(element)))
            
        ))
        .then(console.log('post data map'))
    })

    .catch((error)=>console.log(error))
    }
    console.log('finished Initial List')
}

export function DispatchMovie (movie) {
    console.log('initial function')
    return function (dispatch) {
        console.log('dispatching')
        dispatch(AddMovie(movie))
        console.log('dispatched')
    }

}

 function getGenreList (genreType) {
   return fetch(getQuery(genreType))
    .then((response) => response.json())
   .catch(function(error){ console.log(error) })
}
export function DataFetchin () {
    return {
        type : FETCHING_DATA,

    }
}


export function AddMovie(card) {
    return {
        type : ADD_MOVIE,
        card
    }
}



export default function movieList (state = InitialState , action ){
    console.log(action)
    switch (action.type) {
        case ADD_MOVIE:
        console.log('add movie' + action.movie.id)
            return Object.assign( {}, state,{
              movies:[
                  ...state.movies,
                  {
                movie: action.movie}
              ]
            })
            case FETCHING_DATA:
            return{...state, isFetching:true}

        default :
        console.log('default')
        return state
    }
}