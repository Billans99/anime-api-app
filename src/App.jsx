
// TO DO LIST: 

// - 1. Give minimum height to Cards images in CSS, some of the SearchCards are displaying smaller due to this
// - 2. modify SearchCards component to only render safe-for-work cards
// - 3. Update RandomAnimeCards' endpoint to be safe-for-work animes
// - 4. Make more comments to explain code

// - 5. Find a way to access non-rate limited api data from Jikan API. (about half the data you get from the current api call is rate limited)





// Using Jikan 4.0 API (REST) to fetch data

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
import NewsletterAlert from './NewsletterAlert.jsx'
import Cards from './Cards.jsx'
import React, { useEffect, useState } from "react"
import TopAnimeCards from './TopAnimeCards.jsx'
import RecommendationAnimeCards from './RecommendationAnimeCards.jsx'
import RandomAnimeCards from './RandomAnimeCards.jsx'
import SearchCards from './SearchCards.jsx'
import axios from 'axios'



const App = () => {

  const [showHomeCards, setShowHomeCards] = useState(true)
  const [showTopAnime, setShowTopAnime] = useState(false)
  const [showRecommendationAnime, setShowRecommendationAnime] = useState(false)
  const [showRandomAnime, setShowRandomAnime] = useState(false)
  const [showSearchAnime, setShowSearchAnime] = useState(false)

  const [searchAnimeData, setSearchAnimeData] = useState([])
  
  


  // show top anime cards and hide the rest
  const handleTopAnimeClick = () => {
    setShowHomeCards(false)
    setShowRecommendationAnime(false)
    setShowRandomAnime(false)
    setShowSearchAnime(false)
    setShowTopAnime(true)
    
}

  // show recommendation anime cards and hide the rest
  const handleRecommendationAnimeClick = () => {
    setShowHomeCards(false)
    setShowTopAnime(false)
    setShowRandomAnime(false)
    setShowSearchAnime(false)
    setShowRecommendationAnime(true)
  }

  // show random anime cards and hide the rest
  const handleRandomAnimeClick = () => {
    setShowHomeCards(false)
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
    setShowSearchAnime(false)
    setShowRandomAnime(true)
  }

  // sets rest of show states to false and only shows home cards
  const handleShowHomeClick = () => {
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
    setShowRandomAnime(false)
    setShowSearchAnime(false)
    setShowHomeCards(true)
  }

  // sets rest of show states to false and only shows search cards
  const handleShowSearchAnime = () => {
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
    setShowRandomAnime(false)
    setShowHomeCards(false)
    setShowSearchAnime(true)
  }

  // function called every time search input changes, sets searchAnimeData to the response from the api
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)
      // it may be response.data.results instead
      const data = response.data.data
      setSearchAnimeData(data)
      handleShowSearchAnime()

    } catch (error) {
      console.error('Error fetching search data', error)
    }
  }
  



  return (
    <>
      <Header 
        handleShowHomeClick={handleShowHomeClick}
        handleTopAnimeClick={handleTopAnimeClick}
        handleRecommendationAnimeClick={handleRecommendationAnimeClick}
        handleRandomAnimeClick={handleRandomAnimeClick}
        handleSearch={handleSearch}
        />
      {/* <NewsletterAlert/> */}

      {showHomeCards ? <Cards 
        
        /> :
        showTopAnime ? <TopAnimeCards/> :
        showRecommendationAnime ? <RecommendationAnimeCards/> : 
        showRandomAnime ? <RandomAnimeCards/> : 
        showSearchAnime ? <SearchCards searchAnimeData={searchAnimeData}/> : 
        <Cards/>}

    </>
  )
}

export default App
