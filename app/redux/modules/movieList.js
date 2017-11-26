import {getQuery} from 'config/constants'

const fetchingData ="FETCHING_DATA";
const fetchingSuccess = 'FETCHING_SUCCESS'
const festingError = 'FETCHING_ERROR'

const parsingData = 'PARSING_DATA'
const parsingDataSuccess = 'PARSING_DATA_SUCCESS'


const InitialState = {
   movieList:{ genreId : '',
    name : '',
    movieList : []
}
}


function initialList (){
    fetch(getQuery())
    .then((response)=> response.json)
}



export function getGenreList (genreType) {
    console.log('woo')
    console.log(genreType)
   return fetch(getQuery(genreType))
    .then((response) => response.json())
   .catch((error)=> console.log(error) )
}


