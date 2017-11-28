import React from 'react'
import { getApiKey, genre , config} from './constants'






export function getCast (id)
{
    
 ///movie/{movie_id}/credits
 return null
}


export function getInitialList () {

   return 'localhost:8080/moviecard.json'
   
}


export  function getQuery(params){
    console.log(params)
    return config.apiQuery + config.searchParams + genre[params].id;
}


