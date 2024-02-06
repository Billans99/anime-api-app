
// TO DO LIST: 


// - 1. Make the modal wider to fit more content, and creates less scrolling for user
// - 2. Put everything after bio in a flexbox/grid container to take advantage of space
// - 3. Fix issue where if a modal is opened from a higher index of view-more btn, 
// then a previous indexed view more btn is clicked, the higher index modal will open
// instead of the intended modal
// - 4. Fix issue where each animeTitle is being display one extra time (supposed to be 25 not 50).


// - Complete logic for the search feature
// - Do upcoming and popular animes list





// Using Jikan 4.0 API (REST) to fetch data

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
import Cards from './Cards.jsx'
import { useState, useEffect } from 'react'



const App = () => {


  
 

  return (
    <>
      <Header/>
      <Cards/>
    </>
  )
}

export default App
