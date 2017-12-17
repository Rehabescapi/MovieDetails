import React from 'react'
import { getApiKey, genre , config, getSearchParams, initialQuery, detalQuery, detalQueryB} from 'config/constants'


export function fetchingData()
{
   return fetch('http://localhost:3004/results',{})
}


export function getInitialList () {

   return initialQuery()
   
}

export function getFromGenre(gen) {
    
    return getSearchParams()  + gen
}


export  function getQuery(params){

    return config.apiQuery + config.searchParams + genre[params].id;
}

export function getDetail(params){
    return config.detailQuery + params + config.key + config.detailQueryB
}

export function searchMovie(params){
    console.log(params)
    return config.searchQuery + (params).split(' ').join('+') + config.andKey + '&language=en-US&page=1'
  
}