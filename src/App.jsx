
// TO DO LIST: 



// - 1. Make reviews tab of component to display carousel of reviews
// - 2. Add spinner component to show loading state when fetching data
// - 3. Possibly change charactersData useState so it doesnt try to get data from initial render and only when btn is
//      clicked.
// - 4. Makes more comments to explain code
// - 5. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more




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
