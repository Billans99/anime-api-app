// Using Jikan 4.0 API (REST) to fetch data.

// Modify READ.ME file

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
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
  const [loading, setLoading] = useState(false)
  const [searchAnimeData, setSearchAnimeData] = useState([])

  


  // Show top anime cards and hide the rest.
  const handleTopAnimeClick = () => {
    setShowHomeCards(false)
    setShowRecommendationAnime(false)
    setShowRandomAnime(false)
    setShowSearchAnime(false)
    setShowTopAnime(true)
    
}

  // Show recommendation anime and hide the rest.
  const handleRecommendationAnimeClick = () => {
    setShowHomeCards(false)
    setShowTopAnime(false)
    setShowRandomAnime(false)
    setShowSearchAnime(false)
    setShowRecommendationAnime(true)
  }

  // Show random anime and hide the rest.
  const handleRandomAnimeClick = () => {
    setShowHomeCards(false)
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
    setShowSearchAnime(false)
    setShowRandomAnime(true)
  }

  // Show home cards and hide the rest.
  const handleShowHomeClick = () => {
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
    setShowRandomAnime(false)
    setShowSearchAnime(false)
    setShowHomeCards(true)
  }

  // Show the searched anime and hide the rest.
  const handleShowSearchAnime = () => {
    setShowTopAnime(false)
    setShowRecommendationAnime(false)
    setShowRandomAnime(false)
    setShowHomeCards(false)
    setShowSearchAnime(true)
  }

  // When search btn is clicked or enter key pressed, fetch search data with query and set the data object to searchAnimeData state.
  const handleSearch = async (query) => {
    try {
      if (loading) return

      setLoading(true)
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&sfw=true`)
      console.log('searchAnimeCardsResponse', response)
      setSearchAnimeData(response.data.data)
      handleShowSearchAnime()
      setLoading(false)
      
      // Handles what to do in case of an error.
    } catch (error) {
      console.error('Error fetching search data', error)
    }
  }
  



  return (
    <>
      {/* Passing the functions as props to the Header component. */}
      <Header 
        handleShowHomeClick={handleShowHomeClick}
        handleTopAnimeClick={handleTopAnimeClick}
        handleRecommendationAnimeClick={handleRecommendationAnimeClick}
        handleRandomAnimeClick={handleRandomAnimeClick}
        handleSearch={handleSearch}
        />

        {/* Ternary operator to display cards based on states and passing searchAnimeData object from App to SearchCards. */}
        {showHomeCards ? <Cards /> :
        showTopAnime ? <TopAnimeCards/> :
        showRecommendationAnime ? <RecommendationAnimeCards/> : 
        showRandomAnime ? <RandomAnimeCards/> : 
        showSearchAnime ? <SearchCards searchAnimeData={searchAnimeData}/> : 
        <Cards/>}

    </>
  )
}

export default App
