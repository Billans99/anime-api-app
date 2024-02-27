
// TO DO LIST: 



// - 1. Change body text of all data to text-color (grey or close to it) to differentiate from headings (white)
// Change main characters name and role to white, and supporting chars name and role to grey. 

// - 2. Fix Characters section only displaying initial card's characters on click

// - 3. Add spinner component to show loading state when fetching data
// - 4. Possibly change charactersData useState so it doesnt try to get data from initial render and only when btn is
//      clicked.
// - 5. Makes more comments to explain code
// - 6. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more
// - Add staff, stats, recommendations, pictures, suggested order of viewing (More info section @ MAL website),
// - voice actors, staff names and photos, 
// - 7. Add top anime and popular anime to the app
// - 8. Add manga to the app




// Using Jikan 4.0 API (REST) to fetch data

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
import NewsletterAlert from './NewsletterAlert.jsx'
import Cards from './Cards.jsx'
import React, { useEffect, useState } from "react"





const App = () => {

 

  return (
    <>
      <Header/>
      <NewsletterAlert/>
      <Cards/>
    </>
  )
}

export default App
