
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Carousel from 'react-bootstrap/Carousel'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'



const SearchCards = (props) => {

    console.log('searchAnimeData', props.searchAnimeData)

    return (

        <div className="cards-container">
                {/* Map each anime anime to a card  */}
                {props.searchAnimeData && props.searchAnimeData.map((anime) => {
                    return(


                        
                    // Cards that display anime titles and view-more button that opens view-more modal 
                    <div className="cards-content">
                        <Card style={{ width: '21rem' }}>
                            <Card.Img className="cards-image" variant="top" src={anime.images.jpg.image_url} />
                            <Card.Body className="cards-body">

                                <Card.Title className="anime-title">
                                    <h3>{anime.title}</h3>
                                </Card.Title>

                                <div className="cards-footer-container">
                                    <div>
                                        <p className="score-info">{anime.score} / 10</p>
                                    </div>

                                    <div>
                                        <Button onClick={() => handleViewMore(anime, anime.mal_id)} className="view-more-btn" variant="primary">View more</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        
                        {/* Evaluates to truthy and executes the modal code block  */}
                        

                        
                    </div>
                    
                )})}
            </div>
      
    );
  };

  export default SearchCards