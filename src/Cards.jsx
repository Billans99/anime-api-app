

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
{/* Individual cards display different anime titles from the api */}
            <div className="cards-container">
                {animeData.map((animeTitle, index) => {
                    return(
                
                    <div>
                        <Card style={{ width: '21rem' }}>
                            <Card.Img className="cards-image" variant="top" src={animeTitle.images.jpg.image_url} />
                            <Card.Body className="cards-body">

                                <Card.Title className="anime-title">
                                    <h3>{animeTitle.title}</h3>
                                </Card.Title>

                                        
                                <p className="score-info">{animeTitle.score} / 10</p>


{/* View more button shows modal (popup)  */}
                                <Button onClick={() => handleViewMore(index)} className="view-more-btn" variant="primary">View more</Button>
                            </Card.Body>
                        </Card>
                        
                        {viewMore[index] && (
                        <Modal className="view-more-modal"
                                show={show}
                                onHide={() => setShow(false)}
                                dialogClassName="modal-90w"
                                aria-labelledby="more anime info modal">
                            
                            <Modal.Header closeButton className="view-more-header">
                                {/* View-more info image */}
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img className="view-more-image" variant="top" src={animeTitle.images.jpg.image_url} />
                                </Card>

                                <Modal.Title className="view-more-title" id="example-custom-modal-styling-title">
                                <h2>{animeTitle.title}</h2>
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body>               
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

                                <div className="view-more-score">
                                    <h3>Score</h3>
                                    <p>{animeTitle.score} / 10</p>
                                </div>             
                                
                                <div className="genre-score-container">
                                    <h3>Genres</h3>
                                        {animeTitle.genres.map((genre) => {
                                            return <Card.Subtitle className="view-more-genre">{genre.name}</Card.Subtitle>
                                        })}                                         
                                </div>

                                <div className="view-more-release">
                                    <h3>Release date</h3>
                                    <p>{animeTitle.aired.prop.from.year}</p>
                                </div>

                                <div className="view-more-rank">
                                    <h3>Rank</h3>
                                    <p>{animeTitle.rank}</p>
                                </div>

                                <div className="view-more-popularity">
                                    <h3>Popularity</h3>
                                    <p>{animeTitle.popularity}</p>
                                </div>

                                <div className="view-more-episodes">
                                    <h3>Episodes</h3>
                                    <p>{animeTitle.episodes}</p>
                                </div>

                                <div className="view-more-rating">
                                    <h3>Rating</h3>
                                    <p>{animeTitle.rating}</p>
                                </div>

                                <div className="view-more-producers">
                                    <h3>Producers</h3>
                                    {animeTitle.producers.map((producer) => {
                                        return <p>{producer.name}</p>
                                    })}
                                </div>

                                <div className="view-more-studios">
                                    <h3>Studios</h3>
                                    {animeTitle.studios.map((studio) => {
                                        return <p>{studio.name}</p>
                                    })}
                                </div>

                                

                            </Modal.Body>
                        </Modal>
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