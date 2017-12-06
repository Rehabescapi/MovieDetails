export function formatMovie () {


    return {
        
    }
}

export function configureCard(movie)
{
    
    return {
        id : movie.id,
        title : movie.title,
        genre_ids : movie.genre_ids,

        overview : movie.overview,
        release_date : movie.release_date,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path


    }

}
var count = 0;
export function configureGenre( genre ) 
{
    return {
        id : genre.id,
        title : genre.genre,
        location : count++,
        hasquota : false,
        isFetching : false,
        movies : [],
        count  : 0
    }
}