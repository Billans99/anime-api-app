
// TO DO LIST: 

// - 1. Implement search on through query parameter on the Jikan API
// - 2. Update RandomAnimeCards' endpoint to be safe for work animes
// - 3. Make more comments to explain code

// - 4. Find a way to access non-rate limited api data from Jikan API. (about half the data you get from the current api call is rate limited)





// Using Jikan 4.0 API (REST) to fetch data

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
import NewsletterAlert from './NewsletterAlert.jsx'
import Cards from './Cards.jsx'
import React, { useEffect, useState } from "react"
import TopAnimeCards from './TopAnimeCards.jsx'
import RecommendationAnimeCards from './RecommendationAnimeCards.jsx'
import RandomAnimeCards from './RandomAnimeCards.jsx'
import axios from 'axios'




const App = () => {

  const [showHomeCards, setShowHomeCards] = useState(true)
  const [showTopAnime, setShowTopAnime] = useState(false)
  const [showRecommendationAnime, setShowRecommendationAnime] = useState(false)
  const [showRandomAnime, setShowRandomAnime] = useState(false)
  
  



  const handleTopAnimeClick = () => {
    setShowHomeCards(false)
    setShowRecommendationAnime(false)
    setShowRandomAnime(false)
    setShowTopAnime(true)
    
}

  const handleRecommendationAnimeClick = () => {
    setShowHomeCards(false)
    setShowTopAnime(false)
    setShowRandomAnime(false)
    setShowRecommendationAnime(true)
  }

  const handleRandomAnimeClick = () => {
    setShowHomeCards(false)
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
    setShowRandomAnime(true)
  }

  const handleShowHomeClick = () => {
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
    setShowRandomAnime(false)
    setShowHomeCards(true)
  }

  // const handleSearch = async (event) => {
  //   try{
  //     const newSearchInput = event.target.value
  //     setSearchInput(newSearchInput)
  //     const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${newSearchInput}&page=1&sfw`)
  //     const data = response.data.results
  //     setSearchAnimeData(data)

  //   } catch (error) {
  //     console.error('Error fetching search data', error)
  //   }
  // }




  return (
    <>
      <Header 
        handleShowHomeClick={handleShowHomeClick}
        handleTopAnimeClick={handleTopAnimeClick}
        handleRecommendationAnimeClick={handleRecommendationAnimeClick}
        handleRandomAnimeClick={handleRandomAnimeClick}
        
        />
      {/* <NewsletterAlert/> */}

      {showHomeCards ? <Cards 
        
        /> :
        showTopAnime ? <TopAnimeCards/> :
        showRecommendationAnime ? <RecommendationAnimeCards/> : 
        showRandomAnime ? <RandomAnimeCards/> : 
        <Cards
          
         />}

    </>
  )
}

export default App
