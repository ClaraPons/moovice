import React from 'react'

const Cards = (props) => {


  
    return (
        <>
            <h2>{props.title}</h2>
            <img src={props.image} alt=""/>
            <p>{props.date}</p>
            <p>{props.description}</p>
            <button onClick={props.handleClickFavorites}>Add to favorites</button>
        </>
    )
}

export default Cards