import { useEffect, useState } from "react"
import moment from 'moment'
import "./Popular.css"
import "./Weekly.css"
import Cards from "../components/Cards"

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
                    <Cards 
                    key={movie.title} 
                    image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    title={movie.title}  
                    date={movie.release_date} 
                    description={movie.overview} 
                    // handleClickFavorites={() => handleClickFavorites(movie.id)}
                />
                )
            })}
            </div>
        </>
    )
}

export default Weekly