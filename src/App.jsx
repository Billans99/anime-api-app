
// TO DO LIST: 



// - Fix TopAnimeCards component to displayed more anime after loadMore btn is clicked




// Functionality for the rest of the header buttons
//     Complete logic for switching states between topAnime and anime 
//     Complete button functionality from header
//     Complete view more modal logic
//     Complete load more btn logic

// - 2. Make more comments to explain code

// - 3. Find a way to access non-rate limited api data from Jikan API. (about half the data you get from the current api call is rate limited)





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
    setShowHomeCards(false)
    setShowRecommendationAnime(false)
    // setShowRandomAnime(false)
    setShowTopAnime(true)
    
}

  const handleRecommendationAnimeClick = () => {
    setShowHomeCards(false)
    setShowTopAnime(false)
    // setShowRandomAnime(false)
    setShowRecommendationAnime(true)
  }

  // const handleRandomAnimeClick = () => {
  //   setShowHomeCards(false)
  //   setShowTopAnime(false)
  //   setShowRecommendationAnime(false)
  //   setShowRandomAnime(true)
  // }

  const handleShowHomeClick = () => {
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
// setShowRandomAnime(false)
    setShowHomeCards(true)
  }




  return (
    <>
      <Header 
        handleTopAnimeClick={handleTopAnimeClick}
        handleShowHomeClick={handleShowHomeClick}
        handleRecommendationAnimeClick={handleRecommendationAnimeClick}
        />
      {/* <NewsletterAlert/> */}

      {showHomeCards ? <Cards/> :
        showTopAnime ? <TopAnimeCards/> :
        showRecommendationAnime ? <RecommendationAnimeCards/> : <TopAnimeCards/>}

    </>
  )
}

export default App
