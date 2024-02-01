
// TO DO LIST: 
// - Add another component for loading more animeTitles, then do logic for loading that data
// - Add a view more component onClick of button 
// - Complete logic for the search feature

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'



// This is the main page for the Cards component
const Cards = () => {
    const [animeData, setAnimeData] = useState([])
    const [url, setUrl] = useState('https://api.jikan.moe/v4/anime?q=&sfw')
    const [currentPage, setCurrentPage] = useState('')

// Assign 
  
// fetch data from api using axios, set the data to animeData state, then log that data
    const getAnimeData = async () => {
        await axios
        .get(url)
        .then(response => {
            setAnimeData(response.data.data)
            setCurrentPage(response.data.pagination.current_page)
            console.log('response (data)', response)

        })
    }

// function that gets next page by response.data.pagination.current_page + 1
    const getNextPage = () => {
        setCurrenPage(currentPage + 1)
    }

// load next page function - onClick
  
    useEffect(() => {
      getAnimeData()
    }, [])


  
                                    
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
                                            
                                            <h2 className="score-info">{animeTitle.score}</h2>
                                        </div>
                        
                                        

                                        {/* <Card.Subtitle className="anime-genre">{}</Card.Subtitle> */}
                                        <Card.Text></Card.Text>
                                        <Button className="view-more-btn" variant="primary">View more</Button>
                                    </Card.Body>
                                </Card>
                        )
                        })}
                </div>
                

                <div className="prev-next-container">
                    {/* Load previous page button */}
                    <Button className="load-prev-btn" variant="secondary">Previous Page</Button>
                    {/* Load next page button */}
                    <Button className="load-more-btn" variant="primary">Next Page</Button>
                    
                </div>

            </>
            )
        } 


export default Cards