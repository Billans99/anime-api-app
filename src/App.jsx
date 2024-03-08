
// TO DO LIST: 



// - 1. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more




//        Add voice actors tab to app (Jikan Character voice actors section)

//        Add random btn, top anime, and popular anime, recommendations (these are different to anime specific recommendations 
//           as these are random recommendations) to the header

// - 2. Fix issue with some modals showing previously clicked anime data. // Potentially add && to each map so they it doesn't render before mapping data,
//        Maybe because the api has rate limiting and it doesn't load fast enough, so it shows previous data

// - 3. Makes more comments to explain code
// - 4. See if theres a way to load some of the character and reviews data more efficiently, sometimes it doesn't load fast enough and shows previous characters and reviews data





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
