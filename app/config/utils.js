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
        backdrop_path: movie.backdrop_path,
        datePulled : new Date()

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

export function configureDetail(detailID)
{
   let rating
    detailID.releases.countries.forEach((region)=>{
       if(region.iso_3166_1 === 'US' && region.certification)
       { 
           rating = region.certification
        return 
       }
   })

    return {
        cast : detailID.credits.cast.slice(0,4),
        release_date : detailID.release_date,
        rating : rating
    }
}

export function tempGenre  (tempG, movieId, genreNum){
       
      if(tempG[genreNum])
      {
           tempG[genreNum].push(movieId)
      }else{
          var a = []
          a.push(movieId)
         tempG[genreNum] = a
      }
      return tempG
  }
  