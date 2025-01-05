import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { movisContext } from '../context/MovieList'
import Home from './Home'

export default function Titel({setPickUpBestTreeMovis}) {
    const [movis] = useContext(movisContext)
    

    function pickUpBestTreeMovie(movie) {
        if (movie) {
            return setPickUpBestTreeMovis(movie)
        }
        return 
    }

    const topTreeMovie = [...movis]
        .sort((a, b) => b.avrage - a.avrage)
        .slice(0, 3)

    return (
        <header className='header-container'>

            <div className='header-title'>
                <h1>Best Movie</h1>

                <div className='header-buttons'>
                    <button className='button-header'>
                        <Link to={'/'} >home </Link>
                    </button>
                    <button className='button-header' >
                        <Link to={'/delete-movie'} >delete </Link>
                    </button>
                    <button className='button-header' >
                        <Link to={'/search-movie'} >search </Link>
                    </button>
                    <button className='button-header' >
                        <Link to={'/add-movie'} >add </Link>
                    </button>
                </div>
            </div>

            <div className='movis-contaner'>
                <div className='movie-list'>
                    {topTreeMovie.map((el, index) => (

                        <div className='movie toTreeMovise' key={index}>
                            <img src={el.image} alt={el.name} onClick={()=> pickUpBestTreeMovie(el)} />
                        </div>
                    ))}
            
                </div>
            </div>
        </header>
    )
}
