export const config = {
    apiQuery: 'https://api.themoviedb.org/3/discover/movie?api_key=Your_Api_KeyHere',
    searchParams: '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.lte=2016-12-31&with_genres=',
    key: '?api_key=api_key=Your_Api_KeyHere',
    andKey: '&api_key=api_key=Your_Api_KeyHere',
    detailQuery: 'https://api.themoviedb.org/3/movie/',
    detailQueryB: '&append_to_response=releases,credits',
    searchQuery: 'http://api.themoviedb.org/3/search/movie?query='
  }
  
  
 
  const genre = [
    { genre: 'Action', id: 28, active: true },
    { genre: 'Adventure', id: 12, active: true },
    { genre: 'Comedy', id: 35, active: true },
    { genre: 'Crime', id: 80, active: true },
    { genre: 'Drama', id: 18, active: true },
    { genre: 'Family', id: 10751, active: false },
    { genre: 'Fantasy', id: 14, active: true },
    { genre: 'Romance', id: 10749, active: false },
    { genre: 'SciFi', id: 878, active: true }
  ]
  
  export function getSearchParams () {
    return config.apiQuery + config.searchParams
  }
  export function initialQuery () {
    return config.apiQuery
  }
  
  export function getGenreList () {
    return genre
  }
  export function getApiKey () {
    return config.key
  }
  