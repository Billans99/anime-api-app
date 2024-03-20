// import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react"
import Form from 'react-bootstrap/Form'



const Header = (props) => {
    
    
   
    const [loading, setLoading] = useState(false)
    


    const getAnimeData = async () => {
        try {
            if (loading) return

            setLoading(true)
            // const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${props.searchInput}&page=${currentPage}&sfw`)
            console.log('animeSearchResponse', response)
            setAnimeData(response.data.data)
            setCurrentPage(response.data.pagination.current_page)
            setLoading(false)
    
        } catch (error) {
            console.error("Error fetching search data: ", error)
        }
    }
      




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
                            placeholder="Search for anime" />

                    </Form.Group>
                </Form>

                

            </div>


        </div>
        
       

        </>
    )
}

export default Header