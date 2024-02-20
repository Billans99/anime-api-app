
// TO DO LIST: 

//      Add border line to separate character data in view-more modal
// - 1. Add Accordion component to view-more modal to display the characters via main and supporting character tabs
// - 2. Format characters css to look tidier
// - 3. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more
// - 4. Maybe change charactersData useState so it doesnt try to get data from initial render and only when btn is
//      clicked.
// - 5. Makes more comments to explain code



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
