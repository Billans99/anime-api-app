// import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from "react"



const Header = (props) => {

    







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
                

            </div>


        </div>
        
       

        </>
    )
}

export default Header