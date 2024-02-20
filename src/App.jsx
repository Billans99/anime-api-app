
// TO DO LIST: 

// - 1. Add alert "Want to sign up for our newsletter? Click here!" (react bootstrap component) (Make alert.jsx component)
// - 2. Add Accordion component to view-more modal to display the characters via main and supporting character tabs
// - 3. Format characters css to look tidier
// - 4. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more
// - 5. Maybe change charactersData useState so it doesnt try to get data from initial render and only when btn is
//      clicked.
// - 6. Makes more comments to explain code



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
