import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Carousel from 'react-bootstrap/Carousel'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'

const RecommendationAnimeCards = () => {

    const [recommendationAnimeData, setRecommendationAnimeData] = useState([])
    const [selectedAnime, setSelectedAnime] = useState(null)
    const [selectedAnimeID, setSelectedAnimeID] = useState(null)
    



    useEffect(() => {
        getRecommendationAnimeData()
    }, [])




    // Fetch Recommended anime data from recommendation anime endpoint
    const getRecommendationAnimeData = async () => {
            try {

                const response = await axios.get('https://api.jikan.moe/v4/recommendations/anime')
                console.log('recommendationAnimeResponse', response)
                setRecommendationAnimeData(response.data.data)

            } catch (error) {
                console.error('Error fetching recommendationAnime Data', error)
            }
        }

     
    // load more button that loads additional 25 anime titles to page by appending to previous array
    // const loadMoreAnime = () => {
    //     setCurrentPage(currentPage + 1)
    // }


        return(
            <>
            <h3 className="anime-recommendations-heading">Anime Recommendations List</h3>

             <div className="recommendations-flex-container">

                {recommendationAnimeData.map((recommendation) => {
        


                return(
                    <>
                        <div className="anime-recommendations-container">
                            <p className="anime-recommendations-username">{recommendation.user.username}</p>

                            <div className="anime-recommendations-header">

                                {recommendation.entry.map((entry) => {
                                    return(
                                        <>
                                            
                                            <p className="anime-recommendations-title"><b>Recommended Anime:</b> {entry.title}</p>

                                            <div className="anime-recommendations-images">
                                                <img src={entry.images.jpg.image_url} alt="Foo bar"></img>
                                            </div>
                                        </>
                                    )
                                })}

                            </div>
                            
                            

                            <p className="anime-recommendations-content">{recommendation.content}</p>
                            
                        </div>
                    </>
                )

            })}

            </div>
            

                        
                  
            

           
                    


        </>
    )
}

export default RecommendationAnimeCards