
// TO DO LIST: 



// - Complete top btn functionality

//     Complete top btn functionality in Header
//     Complete view more modal logic
//     Complete logic for switching states between topAnime and anime 
//     Complete load more btn logic

//        Add random btn, top anime, and popular anime, recommendations (these are different to anime specific recommendations 
//           as these are random recommendations, home) to the header

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





  return (
    <>
      <Header handleTopAnimeClick={handleTopAnimeClick}/>
      {/* <NewsletterAlert/> */}
      {showTopAnime ? <TopAnimeCards/> : <Cards/>}
    </>
  )
}

export default App
