
// TO DO LIST: 



// - 1. Add characters to the bottom of view-more-modals. (`https://api.jikan.moe/v4/anime/{id}/characters`)
//        Get the mal_id of whatever anime is clicked on, store that id (num) in a state variable (selectedAnimeID)
//        when view-more btn is clicked, get character data from api with that new endpoint 
//        conditionally render characters if it is not null, it is looking for a number, so if it is null, it will not render

// - 3. Add trailers to the bottom of view-more-modals.
// - 4. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more



// Using Jikan 4.0 API (REST) to fetch data

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
import Cards from './Cards.jsx'
import React, { useEffect, useState } from "react"



const App = () => {

 

  return (
    <>
      <Header/>
      <Cards/>
    </>
  )
}

export default App
