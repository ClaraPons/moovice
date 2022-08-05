import { useEffect, useState } from "react"


const Home = () => {

    const [latest, setLatest] = useState([])
    const [topRated, settopRated] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [upComing, setUpComing] = useState([])

    useEffect (() => {
        fetchLatest()
        fetchTopRated()
        fetchNowPlaying()
        fetchUpComing()
    }, [])


    const fetchLatest = async () =>{
        const request = await fetch (`https://api.themoviedb.org/3/movie/latest?api_key=7f055248b469fa40b1e70ef6f88c9568`)
        const response = await request.json()
        // console.log(response)
        setLatest(response)
        // console.log(latest)
    }

    const fetchTopRated = async () =>{
        const request = await fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=7f055248b469fa40b1e70ef6f88c9568&page=1`)
        const response = await request.json()
        // console.log(response)
        settopRated(response.results)
        // console.log(topRated)
    }

    const fetchNowPlaying = async () =>{
        const request = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=7f055248b469fa40b1e70ef6f88c9568&page=1`)
        const response = await request.json()
        // console.log(response)
        setNowPlaying(response.results)
        // console.log(nowPlaying)
    }

    const fetchUpComing = async () => {
        const request = await fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=7f055248b469fa40b1e70ef6f88c9568&page=1`)
        const response = await request.json()
        // console.log(response)
        setUpComing(response.results)
        // console.log(upComing)
    }


    return(
        <>
            <h1>Home</h1>
            <div className="latest">
                <h2>Latest Movie</h2>
                <div className='card-fav' key={latest.title}>
                        <img className='affiche' src={`https://image.tmdb.org/t/p/w300/${latest.poster_path}`} alt=""></img>
                        <h2 className='title-latest'>{latest.title}</h2>
                        <p>Release date: {latest.release_date}</p>
                        {/* <p className='description'>{latest.overview}</p> */}
                </div>
            </div>
            <div className="top-rated">
                <h2>To Rated Movies</h2>
                {topRated.map(movie => {
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
             <div className="now-playing">
                <h2>Now Playing Movies</h2>
                {nowPlaying.map(movie => {
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
             <div className="upcoming">
                <h2>Upcoming Movies</h2>
                {upComing.map(movie => {
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

export default Home