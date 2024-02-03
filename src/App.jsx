
// TO DO LIST: 

// - Add a 'MoreInfo' Modal component onClick of "view-more" button 
// - Create styling for the MoreInfo component OR delete MoreInfo component if not necessary
// - Delete genre section of cards to create more space for the title and image
// - Increase height to Cards.jsx images to make them appear more clear
// - Complete logic for the search feature
// - Do upcoming and popular animes list





// Using Jikan 4.0 API (REST) to fetch data

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
import Cards from './Cards.jsx'
import MoreInfo from './MoreInfo.jsx'
import { useState, useEffect } from 'react'



const App = () => {


  
 

  return (
    <>
      <Header/>
      <Cards/>
      <MoreInfo/>
    </>
  )
}

export default App
