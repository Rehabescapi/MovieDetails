import {searchMovie } from 'config/api'
import { AddMovie } from './movieList';
const SEARCH = 'SEARCH'
const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'

var InitialState = {
    queryText : ''
}

export function updateSearchText (text) {
    return{
        type : UPDATE_SEARCH_TEXT,
        text
    }
}


export function searchAndHandleResultText () {
    return function (dispatch ,getState) {
        var text = getState().search.queryText
        dispatch(searchSubmit)
        fetch(searchMovie(text))
        .then((response) => response.json())
        .then(function(data){
            console.log(data.results[0])
        
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



export default function search (state = InitialState , action ) {
    switch(action.type){
        case UPDATE_SEARCH_TEXT :
        return {
            ...state, 
            queryText : action.payload
        }


        default :
        return state
    }
}