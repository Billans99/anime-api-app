

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


const Cards = () => {
    const [animeData, setAnimeData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [viewMore, setViewMore] = useState([])
    const [show, setShow] = useState()

    useEffect(() => {
        getAnimeData();
    }, [currentPage]);

    useEffect(() => {
        setViewMore(new Array(animeData.length).fill(false));
    }, [animeData]);

    const getAnimeData = async () => {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${currentPage}&q=&sfw`);
            setAnimeData(prevData => [...prevData, ...response.data.data]);
            setCurrentPage(response.data.pagination.current_page);
            console.log('data', response.data)
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    const loadMore = () => {
        setCurrentPage(currentPage + 1);
    }

    const handleViewMore = (index) => {
        setViewMore(viewMore.map((value, i) => i === index ? !value : value));
        setShow(true)
    }

    return (
        <>
            <div className="cards-container">
                {animeData.map((animeTitle, index) => {
                    return(
                
                    <div>
                        <Card style={{ width: '21rem' }}>
                            <Card.Img className="cards-image" variant="top" src={animeTitle.images.jpg.image_url} />
                            <Card.Body className="cards-body">

                                <Card.Title className="anime-title"><h3>{animeTitle.title}</h3></Card.Title>
                
    {/* Use this code for the view-more functionality  */}

                                {/* <div className="genre-score-container">
                                            {animeTitle.genres.map((genre) => {
                                                return <Card.Subtitle className="anime-genre">{genre.name}</Card.Subtitle>
                                            })}                                         
                                </div> */}
                                        
                                <h2 className="score-info">{animeTitle.score}</h2>


                                {/* View more button shows modal (popup)  */}
                                <Button onClick={() => handleViewMore(index)} className="view-more-btn" variant="primary">View more</Button>
                            </Card.Body>
                        </Card>
                        
                        {viewMore[index] && (
                            <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                          >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                <h2>{animeTitle.title}</h2>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            
                            <div className="more-info-episodes">
                                <h3>Episodes</h3>
                                <p>{animeTitle.episodes}</p>
                            </div>
                            
                            {animeTitle.background ? 
                                <div className="more-info-bio">
                                    <h3>Bio</h3>
                                    <p>{animeTitle.background}</p>
                                </div>
                                : 
                                <div className="more-info-bio">
                                    <h3>Bio</h3>
                                    <p>The bio for {animeTitle.title} is unavailable</p>
                                </div>
                            }      
                            
                              
                              <div className="genre-score-container">
                                            <h3>Genres</h3>
                                            {animeTitle.genres.map((genre) => {
                                                return <Card.Subtitle className="view-more-genre">{genre.name}</Card.Subtitle>
                                            })}                                         
                                </div>
                              
                            </Modal.Body>
                          </Modal>
                        
                            // <Card style={{ width: '21rem' }}>

                            //     <Card.Img className="view-more-image" variant="top" src={animeTitle.images.jpg.image_url} />

                            //     <Card.Body className="view-more-body">

                            //         <Card.Title className="view-more-title"><h3>{animeTitle.title}</h3></Card.Title>

                            //         <div className="genre-score-container">
                            //                 {animeTitle.genres.map((genre) => {
                            //                     return <Card.Subtitle className="anime-genre">{genre.name}</Card.Subtitle>
                            //                 })}                                         
                            //         </div>
                                        
                            //         <h2 className="score-info">{animeTitle.score}</h2>

                            //         <Button onClick={() => handleViewMore(index)} className="view-more-btn" variant="primary">View more</Button>

                            //     </Card.Body>
                            // </Card>
                        )}

                        
                    </div>
                )})}
            </div>
            <div className="load-more-container">
                <Button onClick={loadMore} className="load-more-btn" variant="secondary">Load More</Button>
            </div>
        </>
    )
}

export default Cards;