
// TO DO LIST: 
// - Add another component for loading more animeTitles, then do logic for loading that data
// - Fix up the code change it to work with axios instead of fetch
// - center items in cards - display: flex, justify-content: center, align-items: center
// - Add a view more component onClick of button 
// - Complete logic for the search feature

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'


// // Initially perform a fetch request to get the data from the api using useEffect
//     useEffect(() => {
//         getAnimeData()
//       }, [])

// // function that gets loads more by response.data.pagination.current_page + 1
//    const loadMore = () => {
//         getAnimeData(currentPage + 1)
//     }
 


    const Cards = () => {
        const [animeData, setAnimeData] = useState([])
        const [currentPage, setCurrentPage] = useState(1)
    
        // Fetch data from api using fetch, set the data to animeData state, set currentPage, then log that data
        const fetchData = (page) => {
            return fetch(`https://api.jikan.moe/v4/anime?page=${page}&q=&sfw`)
                .then((res) => res.json())
                .then((data) => {
                    setAnimeData(prevData => [...prevData, ...data.data]);
                    setCurrentPage(data.pagination.current_page);
                    console.log('data', data)
                })
        }
    
        // useEffect to fetch data on initial render
        useEffect(() => {
            fetchData(currentPage);
        }, []);
        
        // Function to load more data to screen
        const loadMore = () => {
            fetchData(currentPage + 1);
        }

                                    
    return (
            <>
                <div className="cards-container">
                    {animeData.map((animeTitle) => {
                        return( 
                                <Card style={{ width: '21rem' }}>
                                    <Card.Img className="cards-image" variant="top" src={animeTitle.images.jpg.image_url} />
                                        
                                    <Card.Body className="cards-body">
                                        <Card.Title className="anime-title"><h3>{animeTitle.title}</h3></Card.Title>
                                        
                                        <div className="genre-score-container">
                                            {animeTitle.genres.map((genre) => {
                                                return <Card.Subtitle className="anime-genre">{genre.name}</Card.Subtitle>
                                            })}                                         
                                        </div>
                                        
                                        <h2 className="score-info">{animeTitle.score}</h2>

                                        {/* <Card.Subtitle className="anime-genre">{}</Card.Subtitle> */}
                                        <Card.Text></Card.Text>
                                        <Button className="view-more-btn" variant="primary">View more</Button>
                                    </Card.Body>
                                </Card>
                        )
                        })}
                </div>
                

                <div className="load-more-container">
                    <Button onClick={loadMore} className="load-more-btn" variant="secondary">Load More</Button>
                </div>

            </>
            )
        } 


export default Cards