
import { fail } from "assert";

export const config ={
    apiQuery : 'https://api.themoviedb.org/3/discover/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4',
    searchParams: '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.lte=2016-12-31&with_genres=',
    key:'c4caddf3d2f1e3a21633c2611179f2e4'
}

//https://api.themoviedb.org/3/search/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&query=
export const genre = {
   Action:{ id : '28', active: true},
    Adventure :{id : '12', active : true},
    Comedy : {id : '35', active: true},
    Crime : {id : '80', active: false},
    Drama : {id: '18', active: true},
    Family : {id : '10751',active:false},
    Fantasy: {id :'14', active:true},
    Romance: {id : '10749', active: true},

    SciFi : {id : '878', active: false}
}


export  function getApiKey()
{
    return config.key
}