import React from 'react'

const Cards = (props) => {


  
    return (
        <div className='card'>
            <img className='affiche' src={props.image} alt=""/>
            <div className='infos'>
            <h2>{props.title}</h2>
            <p><strong>Release date :</strong> {props.date}</p>
            {/* <p className='description'><strong>Description :</strong>{props.description}</p> */}
            <button className='button-popular' onClick={props.handleClickFavorites}>Add to favorites</button>
            </div>
        </div>
    )
}

export default Cards