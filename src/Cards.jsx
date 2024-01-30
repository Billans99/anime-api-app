// importing components from React-bootstrap import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'



// This is the main page for the Cards component
const Cards = () => {
    const [animeData, setAnimeData] = useState([])
    const [url, setUrl] = useState('https://api.jikan.moe/v4/anime?q=&sfw')
  
    const getAnimeData = async () => {
        await axios
        .get(url)
        .then(response => {
            setAnimeData(response.data.data)
            console.log(animeData)
        })
    }
  
    useEffect(() => {
      getAnimeData()
    }, [])
  
                                    
    return (
            <>
                {/* {data.map((item) => ( */}
                    {/* <div className="cards-container">
                        <Card style={{ width: '21rem' }}>
                            <Card.Img className="cards-image" variant="top" src={item.images.jpg.image_url} />

                            <Card.Body className="cards-body">
                                <Card.Title className="anime-title">{item.name}</Card.Title>

                                {item.genres.map((genre) => (
                                    <Card.Subtitle className="anime-category" key={genre.id}>{genre.name}</Card.Subtitle>
                                ))}

                                <Card.Text></Card.Text>
                                <Button className="view-more-btn" variant="primary">View more</Button>
                            </Card.Body>
                        </Card>
                    </div> */}


                    <div className="cards-container">
                        {animeData.map((animeTitle) => {
                            
                            return( <Card style={{ width: '21rem' }}>
                                        {/* <Card.Img className="cards-image" variant="top" src={} /> */}
                                        <Card.Body className="cards-body">
                                            <Card.Title className="anime-title">{animeTitle.title}</Card.Title>
                                            {animeTitle.genres.map((genre) => {
                                                return <Card.Subtitle className="anime-genre">{genre.name}</Card.Subtitle>
                                            })}
                                            {/* <Card.Subtitle className="anime-genre">{}</Card.Subtitle> */}
                                            <Card.Text></Card.Text>
                                            <Button className="view-more-btn" variant="primary">View more</Button>
                                        </Card.Body>
                                    </Card>
                            )
                            })}
                    </div>

            </>
            )
        } 


export default Cards