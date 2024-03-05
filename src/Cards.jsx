

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Carousel from 'react-bootstrap/Carousel'
import ProgressBar from 'react-bootstrap/ProgressBar'






    // Cards component
const Cards = () => {
    const [animeData, setAnimeData] = useState([])
    const [animeCharactersData, setAnimeCharactersData] = useState([])
    const [animeReviewsData, setAnimeReviewsData] = useState([])
    const [newsData, setNewsData] = useState([])
    const [statsData, setStatsData] = useState([])
    const [picturesData, setPicturesData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [reviewsArray, setReviewsArray] = useState([0, 5])
    const [loading, setLoading] = useState(false)
    const [selectedAnime, setSelectedAnime] = useState(null)
    const [selectedAnimeID, setSelectedAnimeID] = useState(null)
    const [recommendationsData, setRecommendationsData] = useState([])

    

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

    useEffect(() => {
        getStatsData()
    }, [selectedAnimeID])

    useEffect(() => {
        getPicturesData()
    }, [selectedAnimeID])

    useEffect(() => {
        getRecommendationsData()
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

   const getStatsData = async () => {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${selectedAnimeID}/statistics`)
            console.log('statsResponse', response)
            setStatsData(response.data.data)
        }   catch (error) {
            console.error('error fetching data', error)
        }
   }

   const getPicturesData = async () => {
        try {
            const response = await axios.get(`https://api.jikan.moe/v4/anime/${selectedAnimeID}/pictures`)
            console.log('picturesResponse', response)
            setPicturesData(response.data.data)

        } catch (error) {
            console.error('error fetching picture data', error)
        }
   }

   const getRecommendationsData = async () => {
    try {
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${selectedAnimeID}/recommendations`)
        console.log('recommendationsResponse', response)
        setRecommendationsData(response.data.data)
    } catch (error) {
        console.error('error fetching character data', error)
    }
   }
  
    // load more button that loads additional 25 anime titles to page
    const loadMoreAnime = () => {
        setCurrentPage(currentPage + 1)
    }

    // Handles logic for view more button
    const handleViewMore = (anime) => {
        setSelectedAnime(anime)
        setSelectedAnimeID(anime.mal_id)
    }

    // const handleRecommendationsClick = (recommendation) => {
    //     console.log('UserRecommendations', recommendation)

    // }

    const loadMoreReviews = () => {
        setReviewsArray([reviewsArray[0], reviewsArray[1] + 5])
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
                                            <h3 className="summary-heading">Summary</h3>
                                            <p className="summary-body">{selectedAnime.synopsis}</p>
                                        </div>
                                        : 
                                        <div className="view-more-summary">
                                            <h3>Summary</h3>
                                            <p>The summary for {selectedAnime.title} is unavailable.</p>
                                        </div>
                                    }   

                                {selectedAnime.background ? 
                                    <div className="view-more-background">
                                        <h3 className="background-heading">Background</h3>
                                        <p className="background-body">{selectedAnime.background}</p>
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
                                        className="tabs-container">

                                        {/* General info tab  */}
                                        <Tab className="general-info-tab" eventKey="general" title="General Info">

                                            <div className="general-info-heading">
                                                <h3>General Info</h3>
                                            </div>
                                            

                                            <div className="view-more-container">

                                                <div className="view-more-score">
                                                    <h3 className="score-heading">Score</h3>
                                                    <p className="score-body">{selectedAnime.score} / 10</p>
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

                                        {/* Reviews tab */}
                                        <Tab className="reviews-tab" eventKey="reviews" title="Reviews">

                                            <h3 className="reviews-heading">Reviews</h3>

                                            {/* view-more reviews data */}
                                            {animeReviewsData.slice(reviewsArray[0], reviewsArray[1]).map((review) => {
                                                return(
                                                    <>
                                                        <div className="reviews-container">

                                                            <img className="avatar-image" 
                                                                    src={review.user.images.jpg.image_url} 
                                                                    alt="A reviewers avatar">
                                                            </img>

                                                            <div className="review-username">
                                                                <h4>{review.user.username}</h4>
                                                            </div>

                                                            <div className="review-score">
                                                                <h4>{review.score}/10</h4>
                                                            </div>

                                                        </div> 

                                                        <div className="review-body-container">
                                                            {/* Review body, limited to 500 characters */}
                                                            <p className="review-body">{review.review.length > 500 ?
                                                                `${review.review.substring(0, 500)}...` : item.description}                                                       
                                                            </p>

                                                            {review.tags.map((recommendation) => {

                                                                let recommendationColor = ''
                                                                    
                                                                    if (recommendation === 'Recommended') {
                                                                        recommendationColor = 'green'
                                                                    } else if (recommendation === 'Mixed Feelings') {
                                                                        recommendationColor = 'orange'
                                                                    } else {
                                                                        recommendationColor = 'red'
                                                                    }

                                                                    return(
                                                                        <div className="recommendation-container">
                                                                            <p className={recommendationColor}>{recommendation}</p>
                                                                        </div>
                                                                    )
                                                                
                                                                
                                                            })}
                                                        </div>

                                                    </>
                                                )
                                            })}             

                                                    <div className="review-btn-container">
                                                            {reviewsArray[1] < animeReviewsData.length &&
                                                                <Button onClick={() => loadMoreReviews()} className="more-reviews-btn" variant="primary">More reviews</Button>
                                                            }

                                 
                                                    </div>

                                        </Tab>

                                        {/* Characters data */}
                                        <Tab className="characters-tab" eventKey="characters" title="Characters">
                                            
                                            {/* view-more characters data */}
                                            <h3 className="characters-heading">Characters</h3>
                                            <div className="characters-container">
                                                    {animeCharactersData.map((character) => {

                                                        let characterRoleColor = ''

                                                        if (character.role === 'Main') {
                                                            characterRoleColor = 'white'
                                                        } else if (character.role === 'Supporting') {
                                                            characterRoleColor = 'grey'
                                                        }

                                                        return(
                                                            <>
                                                                <div className="characters-content">
                                                                    <img className="character-image" src={character.character.images.jpg.image_url} alt="Image of anime character"></img>
                                                                    <p className="character-name">{character.character.name}</p>
                                                                    <p className={characterRoleColor}>{character.role}</p>
                                                                </div>
                                                            </>
                                                        )
                                                        

                                                        
                                                    })}
                                            </div>
                                        </Tab>

                                        {/* News tab */}
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


                                                    const handleNewsClick = () => {
                                                        console.log('newsItem.url', newsItem.url)
                                                    }

                                                        return(
                                                            <>
                                                            {/* ${date.getHours() === 0 ? date.getHours() + 12 : date.getHours()}:${date.getMinutes()} */}
                                                                <div className="news-container">

                                                                    <img className="news-image" src={newsItem.images.jpg.image_url}></img>
                                                                    <div className="news-body-container">
                                                                        <h4 className="news-title">{newsItem.title}</h4>
                                                                        <p className="news-body">{newsItem.excerpt}</p>
                                                                    </div>


                                                                    <div className="primary-btn-container">
                                                                        <p className="news-author">{newsItem.author_username}</p>
                                                                        <p className="news-date">{formattedDate}</p>
                                                                        <Button onClick={() => handleNewsClick()} className="full-story-btn" variant="primary"><a className="news-story-link" href={newsItem.url} target="_blank">Full story</a></Button>
                                                                    </div>

                                                                </div>

                
                                                                   
                                                                
                                                            </>
                                                        )
                                                    })}
                                            
                                        </Tab>

                                        {/* Stats tab */}
                                        <Tab className="stats-tab" eventKey="stats" title="Stats">

                                            <h3 className="stats-heading">Stats for {selectedAnime.title}</h3>
                                                    

                                            <div className="stats-container">
                                                <p className="stats-completed">Completed: {statsData.completed}</p>
                                                <p className="stats-on-hold">On hold: {statsData.on_hold}</p>
                                                <p className="stats-watching">Watching: {statsData.watching}</p>
                                                <p className="stats-dropped">Dropped: {statsData.dropped}</p>
                                                <p className="stats-planned-watch">Plan to watch: {statsData.plan_to_watch}</p>                    
                                                <p className="stats-total">Total: {statsData.total}</p>
                                            </div>


                                            <div className="progress-bar-container">
                                                <h3>Viewers Ratings</h3>
                                            
                                                <ProgressBar>
                                                {statsData.scores && statsData.scores.map((score, index) => {
                                                        let variant = '';
                                                        if (index < 4) {
                                                            variant = 'danger'
                                                        } else if ( index < 6) {
                                                            variant = 'warning'
                                                        } else {
                                                            variant = 'success'
                                                        }

                                                        return(
                                                            <ProgressBar key={index} variant={variant} now={score.percentage} />
                                                        )
                                                        
                                                    })}
                                                </ProgressBar>
                                            </div>
                                        </Tab>

                                        {/* Pictures tab */}
                                        <Tab className="pictures-tab" eventKey="pictures" title="Pictures">

                                            <h3 className="pictures-heading">Pictures</h3>
                                            
                                            <>
                                                    
                                                    
                                                    
                                                        {/* Carousel  */}
                                                        <Carousel className="carousel-container">
                                                            {picturesData.map((picture, index) => {

                                                                return(
                                                                <Carousel.Item key={index}>
                                                                    
                                                                        <img className="carousel-pictures" src={picture.jpg.image_url} alt="pictures from this anime" />
                                                                    
                                                                    <Carousel.Caption>
                                                                        <div className="carousel-caption">
                                                                            <h3>{selectedAnime.title} - {index + 1}</h3>
                                                                        </div>
                                                                        
                                                                    </Carousel.Caption>
                                                                </Carousel.Item>
                                                                )
                                                            })}
                                                            
                                                        </Carousel>


                                                    </>
                                                
                                            

                                            
                                        </Tab>

                                        {/* Recommendations tab  */}
                                        <Tab className="recommendations-tab" eventKey="recommendations" title="Recommendations">
                                        
                                            <h3 className="recommendations-heading">Recommendations for {selectedAnime.title}</h3>

                                            <div className="recommendations-flex-container">
                                                {recommendationsData.map((recommendation) => {
                                                    


                                                    return(
                                                        <>
                                                            <div className="recommendations-container">
                                                                
                                                                <a className="recommendations-title" target="_blank" href={recommendation.entry.url}>{recommendation.entry.title}</a>

                                                                <div className="recommendations-image-container"> 
                                                                    <a target="_blank" href={recommendation.entry.url}><img className="recommendations-image" src={recommendation.entry.images.jpg.image_url} alt="Recommended anime's image"></img></a>
                                                                </div>

                                                                <div className="elaboration-btn-container">
                                                                    <Button variant="warning" className="recommendations-tab-btn">
                                                                            <a className="elaboration-link" target="_blank" href={recommendation.url}>
                                                                                User Elaborations
                                                                            </a>
                                                                    </Button>

                                                                </div>
                                                            </div>
                                                        </>
                                                    )

                                                })}
                                            
                                            </div>

                                           
                                            
                                                    
                                                    
                                                    
                                                        
                                                            
                                                    

                                            
                                        </Tab>
                                        



                                    </Tabs>
                                </div>      

                        
                            </Modal.Body>
                        </Modal>
                        )}


            {/* Load another 25 anime titles button */}
            <div className="load-more-container">
                <Button onClick={loadMoreAnime} className="load-more-btn" variant="secondary">Load More</Button>
            </div>

        </>
    )
}

export default Cards;