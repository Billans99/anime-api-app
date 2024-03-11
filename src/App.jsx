
// TO DO LIST: 



// - Fix recommendation button not working to change page




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
import RecommendationAnimeCards from './RecommendationAnimeCards.jsx'




const App = () => {

  const [showTopAnime, setShowTopAnime] = useState(false)
  const [showRecommendationAnime, setShowRecommendationAnime] = useState(false)
  const [showHomeCards, setShowHomeCards] = useState(true)





  const handleTopAnimeClick = () => {
    setShowRecommendationAnime(false)
    // setShowRandomAnime(false)
    setShowTopAnime(true)
    
}

  const handleRecommendationAnimeClick = () => {
    setShowTopAnime(false)
    // setShowRandomAnime(false)
    setShowRecommendationAnime(true)
  }

  // const handleRandomAnimeClick = () => {
  //   setShowTopAnime(false)
  //   setShowRecommendationAnime(false)
  //   setShowRandomAnime(true)
  // }

  const handleShowHomeClick = () => {
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
    // setShowRandomAnime(false)
  }




  return (
    <>
      <Header 
        handleTopAnimeClick={handleTopAnimeClick}
        handleShowHomeClick={handleShowHomeClick}
        handleRecommendationAnimeClick={handleRecommendationAnimeClick}
        />
      {/* <NewsletterAlert/> */}
      <Cards/>
      {showTopAnime ? <TopAnimeCards/> : <Cards/>}
      {showRecommendationAnime ? <RecommendationAnimeCards/> : <Cards/>}

      {/* {showRecommendationAnime ? <RecommendationAnimeCards/> : <Cards/>} */}
      {/* <RecommendationAnimeCards/> */}
    </>
  )
}

export default App
