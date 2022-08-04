import {Link} from "react-router-dom"


const Header = () =>{
    return(
        <header>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/weekly"}>Weekly</Link>
                <Link to={"/popular"}>Popular</Link>
                <Link to={"/favorites"}>Favorites</Link>
            </nav>
        </header>
    )
}

export default Header