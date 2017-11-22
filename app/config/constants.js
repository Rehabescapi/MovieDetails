const config ={
    apiQuery : 'https://api.themoviedb.org/3/discover/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4',
    searchParams: '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.lte=2016-12-31&with_genres=',
    key:'c4caddf3d2f1e3a21633c2611179f2e4'
}

//https://api.themoviedb.org/3/search/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&query=
export const genre = {
    Action : '28',
    Adventure : '12',
    Comedy : '35',
    Crime : '80',
    Drama : '18',
    Family : '10751',
    Fantasy: '14',
    Romance: '10749',
    SciFi : '878'
}

export  function getQuery(params){
    return config.apiQuery + config.searchParams + genre[params];
}


export  function getApiKey()
{
    return config.key
}