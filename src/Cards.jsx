

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
       



    // Cards component
const Cards = () => {
    const [animeData, setAnimeData] = useState([])
    const [animeCharactersData, setAnimeCharactersData] = useState([])
    const [animeReviewsData, setAnimeReviewsData] = useState([])
    const [newsData, setNewsData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [reviewsArray, setReviewsArray] = useState([0, 5])
    const [show, setShow] = useState()
    const [loading, setLoading] = useState(false)
    const [selectedAnime, setSelectedAnime] = useState(null)
    const [selectedAnimeID, setSelectedAnimeID] = useState(null)
    

    // Immediately load anime data (once) on initial render of page, if current page changes, useEffect will run again
    useEffect(() => {
        getAnimeData()
    }, [currentPage])

    useEffect(() => {
        getCharactersData()
    }, [selectedAnimeID])

    useEffect(() => {
        getReviewsData()
    }, [selectedAnimeID])

    useEffect(() => {
        getNewsData()
    }, [selectedAnimeID])

    // Fetch anime data from Jikan API, and set the state of animeData to the response data
    const getAnimeData = async () => {
        try {
            if (loading) {
                return
            }

            setLoading(true)
            const response = await axios.get(`https://api.jikan.moe/v4/anime?page=${currentPage}&q=&sfw`)
            console.log('response', response)
            setAnimeData(prevData => [...prevData, ...response.data.data])
            setCurrentPage(response.data.pagination.current_page)
            setLoading(false)
    
        } catch (error) {
            console.error("Error fetching data: ", error)
        }
    }

    //  get data from character endpoint after clicking view-more button
   const getCharactersData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${selectedAnimeID}/characters`)
            console.log('charResponse', response)
            setAnimeCharactersData(response.data.data)
            setLoading(false)
            
        } catch (error) {
            console.error("Error fetching data", error)
        }
   }

   const getReviewsData = async () => {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${selectedAnimeID}/reviews`)
            console.log('reviewResponse', response)
            setAnimeReviewsData(response.data.data)

        } catch (error) {
            console.error("error fetching data", error)
        }
        
   }

   const getNewsData = async () => {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${selectedAnimeID}/news`)
            console.log('newsResponse', response)
            setNewsData(response.data.data)

        }   catch (error) {
            console.error('error fetching data', error)
        }
   }



    // load more button that loads additional 25 anime titles to page
    const loadMore = () => {
        setCurrentPage(currentPage + 1)
    }

    // Handles logic for view more button
    const handleViewMore = (anime) => {
        setSelectedAnime(anime)
        setSelectedAnimeID(anime.mal_id)
    }

    const handleNewsClick = () => {
        
    }

    const handleNextReviews = () => {

    }

    const handlePrevReviews = () => {

    }

    
    console.log('selectedAnime', selectedAnime)
    console.log('selectedAnimeID', selectedAnimeID)
    
    

    return (
        <>

            {/* Individual cards display different anime from the api */}
            <div className="cards-container">
                {/* Map each anime anime to a card  */}
                {animeData.map((anime) => {
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


            {selectedAnime && (
                        // Modal popup that displays more information about the anime title
                        //  when view-more button is clicked
                        <Modal className="view-more-modal"
                                size="lg"
                                // If selected anime is truthy, show the modal
                                show={!!selectedAnime}
                                onHide={() => {
                                    setSelectedAnime(null)
                                    setSelectedAnimeID(null)
                                }}
                                dialogClassName="modal-90w"
                                aria-labelledby="more anime info modal">
                            
                            <Modal.Header closeButton className="view-more-header">
                                {/* View-more info image */}
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img className="view-more-image" variant="top" src={selectedAnime.images.jpg.image_url} />
                                </Card>

                                <Modal.Title className="view-more-title" id="example-custom-modal-styling-title">
                                <h2>{selectedAnime.title}</h2>
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body className="modal-body">  

                        
                                {selectedAnime.synopsis ? 
                                        <div className="view-more-summary">
                                            <h3>Summary</h3>
                                            <p>{selectedAnime.synopsis}</p>
                                        </div>
                                        : 
                                        <div className="view-more-summary">
                                            <h3>Summary</h3>
                                            <p>The summary for {selectedAnime.title} is unavailable.</p>
                                        </div>
                                    }   

                                {selectedAnime.background ? 
                                    <div className="view-more-background">
                                        <h3>Background</h3>
                                        <p>{selectedAnime.background}</p>
                                    </div>
                                    : 
                                    <div className="view-more-background">
                                        <h3>Background</h3>
                                        <p>The background for {selectedAnime.title} is unavailable.</p>
                                    </div>
                                }

                                {/* Tabs with more info */}
                                <div className="modal-tab-container">
                                    <Tabs
                                        defaultActiveKey="profile"
                                        id="uncontrolled-tab-example"
                                        className="tabs-container"

                                    >
                                        <Tab className="general-info-tab" eventKey="general" title="General Info">
                                            <div className="view-more-container">
                                                <div className="view-more-score">
                                                    <h3>Score</h3>
                                                    <p>{selectedAnime.score} / 10</p>
                                                </div>             
                                    
                                                <div className="genre-score-container">
                                                    <h3>Genres</h3>
                                                        {selectedAnime.genres.map((genre) => {
                                                            return <Card.Subtitle className="view-more-genre">{genre.name}</Card.Subtitle>
                                                        })}                                         
                                                </div>

                                                <div className="view-more-release">
                                                    <h3>Release date</h3>
                                                    <p>{selectedAnime.aired.prop.from.year}</p>
                                                </div>

                                                <div className="view-more-rank">
                                                    <h3>Rank</h3>
                                                    <p>#{selectedAnime.rank}</p>
                                                </div>

                                                <div className="view-more-popularity">
                                                    <h3>Popularity</h3>
                                                    <p>#{selectedAnime.popularity}</p>
                                                </div>

                                                <div className="view-more-episodes">
                                                    <h3>Episodes</h3>
                                                    <p>{selectedAnime.episodes}</p>
                                                </div>

                                                <div className="view-more-rating">
                                                    <h3>Rating</h3>
                                                    <p>{selectedAnime.rating}</p>
                                                </div>

                                                <div className="view-more-producers">
                                                    <h3>Producers</h3>
                                                    {selectedAnime.producers.map((producer) => {
                                                        return <p>{producer.name}</p>
                                                    })}
                                                </div>

                                                <div className="view-more-studios">
                                                    <h3>Studios</h3>
                                                    {selectedAnime.studios.map((studio) => {
                                                        return <p>{studio.name}</p>
                                                    })}
                                                </div>
                                            </div>
                                        </Tab>


                                        <Tab className="reviews-tab" eventKey="reviews" title="Reviews">

                                            <h3 className="reviews-heading">Reviews</h3>

                                            {/* view-more reviews data */}
                                            {animeReviewsData.slice(0, 5).map((review) => {
                                                return(
                                                    <>
                                                        <div className="reviews-container">

                                                            <img className="avatar-image" 
                                                                    src={review.user.images.jpg.image_url} 
                                                                    alt="Image of anime character">
                                                            </img>

                                                            <div className="review-username">
                                                                <h4>{review.user.username}</h4>
                                                            </div>

                                                            <div className="review-score">
                                                                <h4>{review.score}/10</h4>
                                                            </div>

                                                        </div> 

                                                        <p className="review-body">{review.review}</p>


                                                        <Button onClick={() => handlePrevReviews()} className="view-more-btn" variant="primary">View more</Button>
                                                        <Button onClick={() => handleNextReviews()} className="view-more-btn" variant="primary">View more</Button>
                                                    </>
                                                )
                                            })}
                                        </Tab>


                                        <Tab className="characters-tab" eventKey="characters" title="Characters">
                                            
                                            {/* view-more characters data */}
                                            <h3 className="characters-heading">Characters</h3>
                                            <div className="characters-container">
                                                    {animeCharactersData.map((character) => {
                                                        return(
                                                            <>
                                                                <div className="characters-content">
                                                                    <img className="character-image" src={character.character.images.jpg.image_url} alt="Image of anime character"></img>
                                                                    <p className="character-name">{character.character.name}</p>
                                                                    <p className="character-role">{character.role}</p>
                                                                </div>
                                                            </>
                                                        )
                                                    })}
                                            </div>
                                        </Tab>

                                        {/* News data */}
                                        <Tab className="news-tab" eventKey="news" title="News">
                                            
                                            {/* view-more characters data */}
                                            <h3 className="news-heading">News for {selectedAnime.title}</h3>
                                            
                                                    {newsData.map((newsItem) => {
                                                    
                                                    // create new date object with the date from newsItem (api data)
                                                    const date = new Date(newsItem.date)

                                                    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                                    
                                                    // format the date to a more readable format, get the day, year, hour, and minutes
                                                    // Add leading 0 string to minutes if minutes is less than 10
                                                    // Get the hours into 12-hour format, and replace 0 with 12.
                                                    // Add AM or PM
                                                    const formattedDate = `${monthNames[date.getMonth()]}                                                                           
                                                                            ${date.getDate()} 
                                                                            ${date.getFullYear()} 
                                                                            ${date.getHours() % 12 === 0 ? 12 : date.getHours() % 12}:${date.getMinutes().toString().padStart(2, '0')}  
                                                                            ${date.getHours >= 12 ? 'PM' : 'AM'}`

                                                        return(
                                                            <>
                                                            {/* ${date.getHours() === 0 ? date.getHours() + 12 : date.getHours()}:${date.getMinutes()} */}
                                                                <div className="news-container">

                                                                    <img className="news-image" src={newsItem.images.jpg.image_url}></img>
                                                                    <div className="news-body-container">
                                                                        <h4 className="news-title">{newsItem.title}</h4>
                                                                        <p className="news-excerpt">{newsItem.excerpt}</p>
                                                                    </div>


                                                                    <div className="primary-btn-container">
                                                                        <p className="news-author">{newsItem.author_username}</p>
                                                                        <p className="news-date">{formattedDate}</p>
                                                                        <Button onClick={() => handleNewsClick()} className="full-story-btn" variant="primary">Full story</Button>
                                                                    </div>

                                                                </div>

                
                                                                   
                                                                
                                                            </>
                                                        )
                                                    })}
                                            
                                        </Tab>

                                    </Tabs>
                                </div>      

                        
                            </Modal.Body>
                        </Modal>
                        )}


            {/* Load another 25 anime titles button */}
            <div className="load-more-container">
                <Button onClick={loadMore} className="load-more-btn" variant="secondary">Load More</Button>
            </div>

        </>
    )
}

export default Cards;