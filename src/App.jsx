
// TO DO LIST: 



// - 1. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more


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

 

  return (
    <>
      <Header/>
      {/* <NewsletterAlert/> */}
      <TopAnimeCards/>
      {/* <Cards/> */}
    </>
  )
}

export default App
