// import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'



const Header = (props) => {
    


    // set query intitial state to empty string
    // const [q, setQ] = useState('')
    // const [searchParam] = useState(['titles', 'title'])



    return(
        <>
        {/* Heading text  */}
        <div className="heading-container">

            <h1 className="heading-title">
                Anime List
            </h1>

        
            

                
            <div className="categories-container">
                
                <Button className="category-top" variant="primary" onClick={() => props.handleTopAnimeClick()}>Top</Button>
                
                <Button className="category-recommendations" variant="success" onClick={() => props.handleRecommendationAnimeClick()}>Recommendations</Button>

                <Button className="category-random" variant="warning" onClick={() => props.handleRandomAnimeClick()}>Random</Button>

                <Button className="category-home" variant="dark" onClick={() => props.handleShowHomeClick()}>Home</Button>


                <Form className="search-bar">
                    <Form.Group className="mb-3" controlId="search-bar">
                        {/* <Form.Label></Form.Label> */}
                        <Form.Control 
                            className="search-bar" 
                            id="search-form" 
                            name="search-form" 
                            type="search" 
                            // value={q} 
                            onChange={(e) => setQ(e.target.value)} 
                            placeholder="Search for anime" />

                    </Form.Group>
                </Form>
                

            </div>


        </div>
        
       

        </>
    )
}

export default Header