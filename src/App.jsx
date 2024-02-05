
// TO DO LIST: 


// - Add a 'MoreInfo' Modal component onClick of "view-more" button 
// - 1. Add more data from api to modal
// - 2. Change colour of view-more modal cards to match theme
// - 3. Put everything after bio in a flexbox/grid container to take advantage of space
// - 4. Fix issue where if a modal is opened from a higher index of view-more btn, 
// then a previous indexed view more btn is clicked, the higher index modal will open
// instead of the intended modal

// - Create styling for the MoreInfo component OR delete MoreInfo component if not necessary and implement in
// - Delete genre section of cards to create more space for the title and image, and centre the view more button
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
      {/* <MoreInfo/> */}
    </>
  )
}

export default App
