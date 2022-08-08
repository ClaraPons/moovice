import { useEffect, useState } from "react"
import "./Popular.css"
import "./Favorites.css"

const Favorites = () => {

    const [movies, setMovies] = useState([])

    useEffect (() => {
        fetchFavoritesMovies()
        // eslint-disable-next-line
    }, [])


    const fetchMovies = async (id) => {
        const request = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7f055248b469fa40b1e70ef6f88c9568`)
        const response = await request.json()
        return response
    }

    const fetchFavoritesMovies = async () => {
        const FavoritesMoviesid = localStorage.getItem("FavoritesIds")
        const FavoritesMoviesParse = JSON.parse(FavoritesMoviesid)
        // console.log(FavoritesMoviesParse)

        if(FavoritesMoviesParse){
            const promises = FavoritesMoviesParse.map(id => {
                return fetchMovies(id)
            })
            // console.log(promises)
    
            const promiseAllResult = await Promise.all(promises)
            // console.log(promiseAllResult)
    
    
            setMovies(promiseAllResult)
            
        }
       
    }
    
    console.log(movies)

    return (
        <>
        <h1 className='title-popular'>Favorites</h1>
        <div className="box-fav">
        {movies.map(movie => {
            return(
                <div className='card-fav' key={movie.title}>
                    <img className='affiche' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""></img>
                    <h2 className='title-movie'>{movie.title}</h2>
                    <p>Release date: {movie.release_date}</p>
                    {/* <p className='description'>{movie.overview}</p> */}
                </div>
            )
        })}
        </div>
        </>

    )
}

export default Favorites