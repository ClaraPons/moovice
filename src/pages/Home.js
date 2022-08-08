import { useEffect, useState } from "react"
import "./Home.css"


const Home = () => {

    const [latest, setLatest] = useState(null)
    const [topRated, settopRated] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [upComing, setUpComing] = useState([])

    // const [topRatedSplice, setTopRatedSplice] = useState([])
    // const [nowPlayingSplice, setNowPlayingSplice] = useState([])
    // const [UpcomingSplice, setUpComingSplice] = useState([])

    useEffect (() => {
        fetchLatest()
        fetchTopRated()
        fetchNowPlaying()
        fetchUpComing()
        // eslint-disable-next-line
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
        // topRated.splice(5,15)
        // setTopRatedSplice(topRated)
        // console.log(topRatedSplice)
    }

    // useEffect(() => {
    //     fetchTopRated()
    // },[topRatedSplice])

    const fetchNowPlaying = async () =>{
        const request = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=7f055248b469fa40b1e70ef6f88c9568&page=1`)
        const response = await request.json()
        // console.log(response)
        setNowPlaying(response.results)
        // console.log(nowPlaying)
        // nowPlaying.splice(5,15)
        // setNowPlayingSplice(nowPlaying)
        // console.log(nowPlayingSplice)
    }

    // useEffect(() => {
    //     fetchNowPlaying()
    // },[nowPlayingSplice])

    const fetchUpComing = async () => {
        const request = await fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=7f055248b469fa40b1e70ef6f88c9568&page=1`)
        const response = await request.json()
        // console.log(response)
        setUpComing(response.results)
        // console.log(upComing)
        // upComing.splice(5,15)
        // setUpComingSplice(upComing)
        // console.log(UpcomingSplice)
    }

    // useEffect(() =>{
    //     fetchUpComing()
    // },[UpcomingSplice])

    if(latest === null){
        return <div></div>
      }
    return(
        <>
            {/* <h1 className="home">Home</h1> */}
            <div className="page">
            <div className="box-lm">
                <h2>Latest Movie</h2>
                <div className="latest">
                    <div className='card-home-latest' key={latest.title}>
                            <img className='affiche-home' src={`https://image.tmdb.org/t/p/w300/${latest.poster_path}`} alt=""></img>
                            <h3 className='title-latest'>{latest.title}</h3>
                            {/* <p>Release date: {latest.release_date}</p> */}
                            {/* <p className='description'>{latest.overview}</p> */}
                    </div>
                </div>
            </div>
            <div className="box-tp">
                <h2>To Rated Movies</h2>
                <div className="top-rated">  
                    {topRated.map(movie => {
                    return(
                        <div className='card-home' key={movie.title}>
                            <img className='affiche-home' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""></img>
                            <h3 className='title-home'>{movie.title}</h3>
                            {/* <p>Release date: {movie.release_date}</p> */}
                            {/* <p className='description'>{movie.overview}</p> */}
                        </div>
                    )
                    })}
                </div>
             </div>
             <div className="box-np">
                <h2>Now Playing Movies</h2>
                <div className="now-playing">
                    {nowPlaying.map(movie => {
                    return(
                        <div className='card-home' key={movie.title}>
                            <img className='affiche-home' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""></img>
                            <h3 className='title-home'>{movie.title}</h3>
                            {/* <p>Release date: {movie.release_date}</p> */}
                            {/* <p className='description'>{movie.overview}</p> */}
                        </div>
                    )
                    })}
                </div>
             </div>
             <div className="box-uc">
                <h2>Upcoming Movies</h2>
                <div className="upcoming">
                    {upComing.map(movie => {
                    return(
                        <div className='card-home' key={movie.title}>
                            <img className='affiche-home' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""></img>
                            <h3 className='title-home'>{movie.title}</h3>
                            <p className='description'>Release date: {movie.release_date}</p>
                            {/* <p className='description'>{movie.overview}</p> */}
                        </div>
                    )
                    })}
                </div>
             </div>
             </div>
        </>
    )
}

export default Home