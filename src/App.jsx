
// TO DO LIST: 



// - 1. Give the search feature proper functionality within Header.

// - 2. Use props to move search from Header to Searchbar component.

// - 3. Do upcoming and popular animes list

// - When project is nearly finished, ask baker if he would leave the load more btn in the cards component or make it a separate
//    footer component, if so, how would it work as this time im fetching data in Cards component not App. Would I load the
//    Footer (Foo.jsx) in the Cards component or App component ????



// Using Jikan 4.0 API (REST) to fetch data

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header.jsx'
import Cards from './Cards.jsx'
import React, { useEffect, useState } from "react";



const App = () => {

 

  return (
    <>
      <Header/>
      <Cards/>
    </>
  )
}

export default App
