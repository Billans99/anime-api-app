import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const TopAnimeCards = () => {

    const [topAnimeData, setTopAnimeData] = useState([])


    useEffect(() => {
        getTopAnimeData()
    }, [])




    // Fetch top anime data from top anime endpoint
    const getTopAnimeData = async () => {
            try {

                const response = await axios.get('https://api.jikan.moe/v4/top/anime')
                console.log('topAnimeResponse', response)
                setTopAnimeData(response.data.data)

            } catch (error) {
                console.error('Error fetching topAnime Data', error)
            }
        }
    
        return(
            <div className="cards-container">
            {/* Map each anime anime to a card  */}
            {topAnimeData && topAnimeData.map((topAnime) => {

                return(
                    <>

                    

                {/* // Cards that display anime titles and view-more button that opens view-more modal  */}
                <div className="cards-content">
                    <Card style={{ width: '21rem' }}>
                        <Card.Img className="cards-image" variant="top" src={topAnime.images.jpg.image_url} />
                        <Card.Body className="cards-body">

                            <Card.Title className="anime-title">
                                <h3>{topAnime.title}</h3>
                            </Card.Title>

                            <div className="cards-footer-container">
                                <div>
                                    <p className="score-info">{topAnime.score} / 10</p>
                                </div>

                                <div>
                                    <Button onClick={() => handleViewMore(topAnime, topAnime.mal_id)} className="view-more-btn" variant="primary">View more</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    
                    
                    

                    
                </div>
                </>
            )})}
        </div>
        )

   
       
    
}

export default TopAnimeCards