
// TO DO LIST: 

// Fix Anime List heading so it is large enough to be seen on all screen resolutions

// - 1. See if theres a way to load some of the character and reviews data more efficiently, sometimes it doesn't load fast enough and shows previous characters and reviews data

// - 2. Makes more comments to explain code
// - 3. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more
// - Add stats, recommendations, pictures, suggested order of viewing (More info section @ MAL website),
// - voice actors, staff names and photos, 
// - 4. Add top anime and popular anime to the app
// - 5. Add manga to the app




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
