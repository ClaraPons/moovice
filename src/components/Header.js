import {NavLink} from "react-router-dom"
import "./Header.css"

const Header = () =>{
    return(
        <header className="header">
            <NavLink className="link-home" to={"/"}><h1 className="title-Header">Moovice</h1></NavLink>
            <nav>
                <NavLink className="link" to={"/weekly"}>Weekly</NavLink>
                <NavLink className="link" to={"/popular"}>Popular</NavLink>
                <NavLink className="link" to={"/favorites"}>Favorites</NavLink>
            </nav>
        </header>
    )
}

export default Header