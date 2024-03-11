
// TO DO LIST: 



// - Complete top btn functionality

//     Complete logic for switching states between topAnime and anime 
//     Complete load more btn logic



// Functionality for the rest of the header buttons
//     Complete logic for switching states between topAnime and anime 
//     Complete button functionality from header
//     Complete view more modal logic
//     Complete load more btn logic

// - 2. Make more comments to explain code





// Using Jikan 4.0 API (REST) to fetch data

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
import NewsletterAlert from './NewsletterAlert.jsx'
import Cards from './Cards.jsx'
import React, { useEffect, useState } from "react"
import TopAnimeCards from './TopAnimeCards.jsx'





const App = () => {

  const [showTopAnime, setShowTopAnime] = useState(false)





  const handleTopAnimeClick = () => {
    setShowTopAnime(true)
}

  const handleShowHomeClick = () => {
    setShowTopAnime(false)
    // set all the shows to false similar to above
  }




  return (
    <>
      <Header 
        handleTopAnimeClick={handleTopAnimeClick}
        handleShowHomeClick={handleShowHomeClick}
        />
      {/* <NewsletterAlert/> */}
      {showTopAnime ? <TopAnimeCards/> : <Cards/>}
    </>
  )
}

export default App
