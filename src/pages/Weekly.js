import { useEffect, useState } from "react"
import moment from 'moment'
import "./Popular.css"
import "./Weekly.css"

const Weekly = () => {

    const [weekly, setWeekly] = useState([])

    useEffect(() => {
        fetchWeekly()
        // eslint-disable-next-line
    }, [])

    const fetchWeekly = async () => {
        let dateToday = moment().format("YYYY-MM-DD");
        let dateLastWeek = moment().subtract(7, 'days').format("YYYY-MM-DD")

        // console.log(dateLastWeek)
        const request = await fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${dateLastWeek}&primary_release_date.lte=${dateToday}&api_key=7f055248b469fa40b1e70ef6f88c9568`)
        const response = await request.json()
        setWeekly(response.results)
        console.log(weekly)
    }

    return (
        <>
            {/* <h1 className="title-popular">Weekly</h1> */}
            <div className="box-weekly">
            {weekly.map(movie => {
                  return(
                    <div className='card-weekly' key={movie.title}>
                            <img className='affiche' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=""></img>
                            <div className="text">
                                <h2 className='title-movie'>{movie.title}</h2>
                                <p className="release">Release date: {movie.release_date}</p>
                                <p className="description">Description: {movie.overview}</p>
                            </div>
                        </div>
                )
            })}
            </div>
        </>
    )
}

export default Weekly