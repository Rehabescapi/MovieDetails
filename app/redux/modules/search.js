import {movieSearch } from 'helpers/api'
const SEARCH = 'SEARCH'
const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT'



export function updateSearchText (text) {
    return{
        type : UPDATE_SEARCH_TEXT,
        text
    }
}


export function searchAndHandleResultText (text) {
    return function (dispatch ) {
        movieSearch(text)
        .then()
        .catch((error) => console.warn('Error saving decision', error))

    }
}

export function search(){
    return {
       type: SEARCH
    }
}



export default function search (state = InitialState , action ) {
    switch(action.type){
        case UPDATE_SEARCH_TEXT :
        return {
            ...state, 
            queueText : action.text
        }


        default :
        return state
    }
}