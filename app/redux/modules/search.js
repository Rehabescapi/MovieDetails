import {searchMovie } from 'config/api'
import { AddMovie } from './movieList';
import {configureCard} from 'config/utils'
import { browserHistory } from 'react-router'
const SEARCH = 'SEARCH'
const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'
const SUCCESS_ID = 'SUCCESS_ID'
const CLEAR_ID = 'CLEAR_ID'
var InitialState = {
    queryText : '',
    successId: '',
}

export function updateSearchText (text) {
    return{
        type : UPDATE_SEARCH_TEXT,
        text
    }
}


export function searchAndHandleResultText () {
    return function (dispatch ,getState, push) {
        var text = getState().search.queryText
        var movieList = getState().movieList.movies
        console.log(movieList)
        dispatch(searchSubmit)
        fetch(searchMovie(text))
        .then((response) => response.json())
        .then(function(data){
            console.log(data.results[0])
            //if(already in the system)
       var x //very ugly will look into better way
       data.results.forEach(element => {
            if(movieList[element.id]){
               
                x = element
            }
            
        });
        if(x)
        {
            //push x.id
            dispatch(successId(x.id))
            
        }else{
            
            dispatch( AddMovie( configureCard(data.results[0])))
        }
        })
        .catch((error) => console.warn('Error saving decision', error))

    }
}

export function handleChange(text){
    console.log(text)
    return{
        type: UPDATE_SEARCH_TEXT,
        payload : text
    }
}

export function searchSubmit(){
    return {
       type: SEARCH
    }
}
export function successId( movieId){
    return {
        type : SUCCESS_ID,
        payload : movieId
    }
}
export function clearId()
{
    return {type : CLEAR_ID}
}


export default function search (state = InitialState , action ) {
    switch(action.type){
        case UPDATE_SEARCH_TEXT :
        return {
            ...state, 
            queryText : action.payload
        }

        case SUCCESS_ID:
        return {
            ...state,
            successId : action.payload
        }
        case CLEAR_ID:
        return {
            ...state,
            successId : ''
        }


        default :
        return state
    }
}