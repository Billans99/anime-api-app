
// TO DO LIST: 


// - 1. Add trailers of view-more-modals above characters data.
// - 2. Add logic for images to the cards component and format to look nice
// - 3. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more



// Using Jikan 4.0 API (REST) to fetch data

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
import Cards from './Cards.jsx'
import React, { useEffect, useState } from "react"



const App = () => {

 

  return (
    <>
      <Header/>
      <Cards/>
    </>
  )
}

export default App
