import React, { useState } from 'react'

export default function Adding() {
  const [movieName, setMovieName] = useState("")
  const [movieUrlImage,setMovieUrlImage]= useState("")
  const [movieDescription,setMovieDescription] =useState("")
  

  return (

    <div className='addingContainer'>

      <form onSubmit={handleSubmit}>
        <div className='middleAdding'>
          <h1> add a new movie!</h1>
          <div className='adding-inputs'  >

            <input type="text" placeholder='Movie Name' value={movieName} onChange={(el) =>setMovieName( el.target.value) } />
            <input type="text" placeholder='Movie Picture Url' value={movieUrlImage} onChange={(el) =>setMovieUrlImage( el.target.value) }/>

            <textarea className='description' type="text" placeholder='description' value={movieName} onChange={(el) =>setMovieName( el.target.value) } ></textarea>

          </div>
        </div>
        <div >
          <button className='addButton' > Add Movie</button>
        </div>
      </form>


    </div>
  )
}
