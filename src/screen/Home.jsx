import React, { useContext, useMemo, useState } from 'react'
import { movisContext } from '../context/MovieList'

export default function Home({pickUpBestTreeMovis,setPickUpBestTreeMovis}) {
  
  console.log("pickUpBestTreeMovis:   ",pickUpBestTreeMovis)

  const [ movis, setMovis ] = useContext(movisContext)


  const pikapBestMoovie = [...movis]
    .sort((a, b) => b.avrage - a.avrage)
    .slice(0, 1)


  const [pikapAMovie, setPikapAMovie] = useState([pikapBestMoovie[0]])
  const [RatingBar, setRatingBar] = useState(null)



  const pikapPiveMovis = [...movis]
    .slice(0, 5)


  function pikapMovie(movie) {
    if (movie) {
      setPikapAMovie([movie])
      setPickUpBestTreeMovis(null)

    }
    else {
      return
    }
  }

  function hanelRatingMovie(newRating) {
    setRatingBar(newRating)

    setMovis((prveMovie) =>
      prveMovie.map((movie) => {

        if (movie.name === pikapAMovie[0].name ){ 
        const updatedRating = [...movie.rating, newRating] 
        const total = updatedRating.reduce ((sum,rating)=> sum + rating ,0)
        const avrageRating  = total / updatedRating.length
       
        return {
          ...movie,
          rating:updatedRating,
          avrage:avrageRating
        }
      }
      return movie
      })
    )
  }



  const styles = {
    ratingBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginTop: '20px',
    },
    ratingNumber: {
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
      userSelect: 'none',
    },
  };

  return (
    <div className='container'>
    <div className='home-container'>
      <div className='right'>
        <div className='movie-list-right'>
          {
            pikapPiveMovis.map((movie, index) => (
              <div className='movise-right' key={index}>

                <button onClick={() => pikapMovie(movie)}>

                  <img src={movie.image} alt={movie.name} />
                </button>


              </div>
            ))
          }
        </div>

      </div>
      <div className='rating-movie'>
        <div>
          { pickUpBestTreeMovis ? 
            <div>

              <h1> {pickUpBestTreeMovis.name} </h1>
              <img src={pickUpBestTreeMovis.image} alt={pickUpBestTreeMovis.name} />
              <p>{pickUpBestTreeMovis.description}</p>


            </div>
            :
            <div>

              <h1> {pikapAMovie[0].name} </h1>
              <img src={pikapAMovie[0].image} alt={pikapAMovie[0].name} />
              <p>{pikapAMovie[0].description}</p>


            </div>
          }
        </div>
        <div style={styles.ratingBar}>
          {[1, 2, 3, 4, 5].map((rating) => (
            <span
              onClick={() => hanelRatingMovie(rating)}
              style={{
                ...styles.ratingNumber,
                backgroundColor: RatingBar === rating ? '#4caf50' : '#e0e0e0',
              }}

            >
              {rating}
            </span>
          ))}

          <div>
            {movis.map((movie, index) => {
                                  

              return (movie.name === pikapAMovie[0].name &&
                <p>{movie.avrage}</p>)
            })}
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
