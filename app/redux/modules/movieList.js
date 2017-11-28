import {getQuery, getActiveList, getInitialList} from 'config/api'

const ADD_MOVIE = 'ADD_MOVIE'

const FETCHING_DATA ="FETCHING_DATA";
const fetchingSuccess = 'FETCHING_SUCCESS'
const festingError = 'FETCHING_ERROR'

const parsingData = 'PARSING_DATA'
const parsingDataSuccess = 'PARSING_DATA_SUCCESS'


const InitialState = {
    isFetching: false,
   movieList:{ genreId : '',
    name : '',
    movies : []
}
}



function configureCard(movie)
{
    
    return {
        id : movie.id,
        title : movie.title,
        genre_ids : movie.genre_ids,

        overview : movie.overview,
        release_date : movie.release_date,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path


    }

}



export function initialList (){
    console.log('pre return')
    return function action(dispatch) {
       
        console.log(' return')
        dispatch(fetchingData())



        fetch('http://localhost:3004/results',{})
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
export function setInitial() {
    getInitialList()
}

export function getGenreList (genreType) {
   return fetch(getQuery(genreType))
    .then((response) => response.json())
   .catch(function(error){ console.log(error) })
}

export function AddMovie(card) {
    return {
        type : ADD_MOVIE,
        card
    }
}
function fetchingData(){
    console.log('woo')
    return {type: FETCHING_DATA }
}


export default function movieList (state = InitialState , action ){
    
    switch (action.type) {
        case ADD_MOVIE:
        console.log(action.movie.id)
            return Object.assign( {}, state,{
              movies:[
                  ...state.movies,
                  {id : action.movie.id,
                movie: action.movie}
              ]
            })
            case FETCHING_DATA:
            return{...state, isFetching:true}

        default :
        return state
    }
}