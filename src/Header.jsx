// import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import React, { useState } from "react"
import Form from 'react-bootstrap/Form'



const Header = (props) => {
    
    
    const [searchInput, setSearchInput] = useState('')
    

    // Sets search input state to the value of the input field
    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)
        
    }



    return(
        <>
        {/* Heading text (Anime List)*/}
        <div className="heading-container">

            <h1 className="heading-title">
                Anime List
            </h1>

        
            

            {/* Buttons that change the state of app component to show different categories/sections of anime */}
            <div className="categories-container">

                <Button className="category-home" variant="primary" onClick={() => props.handleShowHomeClick()}>Home</Button>
                
                <Button className="category-top" variant="primary" onClick={() => props.handleTopAnimeClick()}>Top</Button>
                
                <Button className="category-recommendations" variant="primary" onClick={() => props.handleRecommendationAnimeClick()}>Recommendations</Button>

                <Button className="category-random" variant="primary" onClick={() => props.handleRandomAnimeClick()}>Random</Button>

                {/* Executes get request on click of the search button (users may also press enter, as onSubmit has preventDefault function and handleSearch function) */}
                <Button className="search-btn" variant="primary" onClick={() => props.handleSearch(searchInput)}>Search</Button>


                


                {/* Search bar form */}
                <Form className="search-bar" onSubmit={(event) => {
                    event.preventDefault()
                    props.handleSearch(searchInput)
                }}>
                    <Form.Group className="mb-3" controlId="search-bar">
                        {/* <Form.Label></Form.Label> */}
                        <Form.Control 
                            className="search-bar" 
                            id="search-form" 
                            name="search-form" 
                            type="search" 
                            placeholder="Search for anime"
                            onChange={handleSearchInput}
                            />
                            
                    </Form.Group>
                </Form>

                

            </div>


        </div>
        
       

        </>
    )
}

export default Header