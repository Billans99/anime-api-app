

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Foo from './Foo.jsx'

    // Cards component
const Cards = () => {
    const [animeData, setAnimeData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [viewMore, setViewMore] = useState([])
    const [show, setShow] = useState()
    const [selectedCard, setSelectedCard] = useState(null)
    const [loading, setLoading] = useState(false)

    // Immediately load anime data (once) on initial render of page
    useEffect(() => {
        getAnimeData()
    }, [currentPage])

    // Immediately set viewMore state to false for each anime title in the array of animeData
    // on initial render
    useEffect(() => {
        setViewMore(new Array(animeData.length).fill(false))
    }, [animeData])

    // Fetch anime data from Jikan API, and set the state of animeData to the response data
    const getAnimeData = async () => {
        try {
            if (loading) {
                return
            }

            setLoading(true)
            const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${currentPage}&q=&sfw`)
            setAnimeData(prevData => [...prevData, ...response.data.data])
            setCurrentPage(response.data.pagination.current_page)
            setLoading(false)
            console.log('data', response.data)
        } catch (error) {
            console.error("Error fetching data: ", error)
        }
    }

    // load more button that loads additional 25 anime titles to page
    const loadMore = () => {
        setCurrentPage(currentPage + 1)
    }

    // Handles logic for view more button
    const handleViewMore = (index) => {
        setSelectedCard(index)
        setViewMore(viewMore.map((value, i) => i === index ? !value : value))
        setShow(true)
    }

    return (
        <>
            {/* Individual cards display different anime titles from the api */}
            <div className="cards-container">
                {/* Map each anime title to a card  */}
                {animeData.map((animeTitle, index) => {
                    return(
                
                    // Cards that display anime titles and view-more button that opens view-more modal
                    <div className="cards-content">
                        <Card style={{ width: '21rem' }}>
                            <Card.Img className="cards-image" variant="top" src={animeTitle.images.jpg.image_url} />
                            <Card.Body className="cards-body">

                                <Card.Title className="anime-title">
                                    <h3>{animeTitle.title}</h3>
                                </Card.Title>

                                <div className="cards-footer-container">
                                    <div>
                                        <p className="score-info">{animeTitle.score} / 10</p>
                                    </div>

                                    <div>
                                        <Button onClick={() => handleViewMore(index)} className="view-more-btn" variant="primary">View more</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        
                        {/* Evaluates to thruthy and executes the modal code block  */}
                        {selectedCard === index && (
                        // Modal popup that displays more information about the anime title
                        //  when view-more button is clicked
                        <Modal className="view-more-modal"
                                size="lg"
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

                            <Modal.Body className="modal-body">  

                                {animeTitle.synopsis ? 
                                        <div className="view-more-summary">
                                            <h3>Summary</h3>
                                            <p>{animeTitle.synopsis}</p>
                                        </div>
                                        : 
                                        <div className="view-more-summary">
                                            <h3>Summary</h3>
                                            <p>The summary for {animeTitle.title} is unavailable.</p>
                                        </div>
                                    }   

                                {animeTitle.background ? 
                                    <div className="view-more-background">
                                        <h3>Background</h3>
                                        <p>{animeTitle.background}</p>
                                    </div>
                                    : 
                                    <div className="view-more-background">
                                        <h3>Background</h3>
                                        <p>The background for {animeTitle.title} is unavailable.</p>
                                    </div>
                                }      


                                <div className="view-more-container">
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
                                        <p>#{animeTitle.rank}</p>
                                    </div>

                                    <div className="view-more-popularity">
                                        <h3>Popularity</h3>
                                        <p>#{animeTitle.popularity}</p>
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
                                </div>
                                

                            </Modal.Body>
                        </Modal>
                        )}

                        
                    </div>
                )})}
            </div>
            
            {/* Load another 25 anime titles button */}
            <div className="load-more-container">
                <Button onClick={loadMore} className="load-more-btn" variant="secondary">Load More</Button>
            </div>

            <Foo/>
        </>
    )
}

export default Cards;