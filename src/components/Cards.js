import React from 'react'


const Cards = (props) => {


  
    return (
        <div className='card'>
            <div className='card-bis'>
                <img className='affiche' src={props.image} alt=""/>
                <div className="text-popular">
                    <h2 className='title-movie'>{props.title}</h2>
                    <p><strong>Release date :</strong> {props.date}</p>
                    <p className='description'><strong>Description :</strong> {props.description}</p>
                    <button className='button-popular' onClick={props.handleClickFavorites}>Add to favorites</button>
                </div>
            </div>
        </div>
    )
}

export default Cards