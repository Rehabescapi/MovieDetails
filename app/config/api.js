import React from 'react'
import { getApiKey, genre , config, getSearchParams} from 'config/constants'


export function fetchingData()
{
   return fetch('http://localhost:3004/results',{})
}



export function getCast (id)
{
    
 ///movie/{movie_id}/credits
 return null
}


export function getInitialList () {

   return 'localhost:8080/moviecard.json'
   
}

export function getFromGenre(gen) {
    
    return getSearchParams()  + gen
}


export  function getQuery(params){

    return config.apiQuery + config.searchParams + genre[params].id;
}


