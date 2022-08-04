import { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const Popular = () => {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        fetchPopularMovies()
    }, [])

    const fetchPopularMovies = async () => {
        const request = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7f055248b469fa40b1e70ef6f88c9568')
        const response = await request.json()
        setPopular(response.results)
    }

    // console.log(popular)
   
    const handleClickFavorites = (id) => {
        if(localStorage.FavoritesIds === undefined){
            const FavoritesIds = []
            FavoritesIds.push(id)
            const stringifyFavoritesIds = JSON.stringify(FavoritesIds)
            localStorage.setItem("FavoritesIds", stringifyFavoritesIds)
            // console.log(stringifyFavoritesIds)
        } else{
            const getFavoritesIds = localStorage.getItem("FavoritesIds")
            const FavoritesIds = JSON.parse(getFavoritesIds)
            const indexFavoritesIds = FavoritesIds.indexOf(id)
            if(indexFavoritesIds === -1){
                FavoritesIds.push(id)
                const stringifyFavoritesIdsBis = JSON.stringify(FavoritesIds)
                localStorage.setItem("FavoritesIds", stringifyFavoritesIdsBis)
            }
         }
    }

    return(
        <>
            <h1>Popular</h1>
            {popular.map(movie => (
                 <Cards 
                    key={movie.title} 
                    title={movie.title} 
                    image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} 
                    date={movie.release_date} 
                    description={movie.overview} 
                    handleClickFavorites={() => handleClickFavorites(movie.id)
                    }
                />
            ))}
        </>
    )
}

export default Popular