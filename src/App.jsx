
// TO DO LIST: 


// - 1. Add logic for images to the cards component and format to look nice
// - 2. Flesh out app and add as much data as possible to the view-more-modals and anime-app to keep learning more
// - 3. Maybe change charactersData useState so it doesnt try to get data from initial render and only when btn is
//      clicked.
// - 4. Makes more comments to explain code



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
