
// TO DO LIST: 

// - 1. Add progress bar for stats-tab later


// - 2. See if theres a way to load some of the character and reviews data more efficiently, sometimes it doesn't load fast enough and shows previous characters and reviews data
// - 3. Makes more comments to explain code
// - 4. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more
// - Add stats, recommendations, pictures, suggested order of viewing (More info section @ MAL website),
// - voice actors, staff names and photos, 
// - 5. Add top anime and popular anime to the app
// - 6. Add manga to the app




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
