import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes } from 'react-router-dom'
import Home from './screen/Home'
import Adding from './screen/Adding'
import Deleting from './screen/Deleting'
import Search from './screen/Search'
import Titel from './screen/Titel'

function App() {
  const [pickUpBestTreeMovis, setPickUpBestTreeMovis] = useState(null)
 

  return (
    <>
    <Titel setPickUpBestTreeMovis={setPickUpBestTreeMovis}/>
    <Routes>

      <Route path='/' element={<Home pickUpBestTreeMovis ={pickUpBestTreeMovis} setPickUpBestTreeMovis={setPickUpBestTreeMovis} />}/>
      <Route path='/add-movie' element={<Adding  />}/>
      <Route path='/delete-movie' element={<Deleting/>}/>
      <Route path='/search-movie' element={<Search/>}/>
    </Routes>

    </>
  )
}

export default App
