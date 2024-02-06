
// TO DO LIST: 

// - 1. Make each card in the row the same height.
// - 2. Add load more to a footer component. (use props to pass data from Cards to Footer)
// - 3. Fix issue where each animeTitle is being displayed one extra time (supposed to be 25 not 50).


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
