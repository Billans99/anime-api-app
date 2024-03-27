import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner.jsx'

const RecommendationAnimeCards = () => {

    const [recommendationAnimeData, setRecommendationAnimeData] = useState([])
    const [selectedAnime, setSelectedAnime] = useState(null)
    const [selectedAnimeID, setSelectedAnimeID] = useState(null)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    



    useEffect(() => {
        getRecommendationAnimeData()
    }, [currentPage])




    // Fetch Recommended anime data from recommendation anime endpoint
    const getRecommendationAnimeData = async () => {
            try {
                if (loading) return

                setLoading(true)
                const response = await axios.get(`https://api.jikan.moe/v4/recommendations/anime?page=${currentPage}&q=&sfw`)
                console.log('recommendationAnimeResponse', response)
                setRecommendationAnimeData(prevData => [...prevData, ...response.data.data])
                setCurrentPage(response.data.pagination.current_page)
                setLoading(false)

            } catch (error) {
                console.error('Error fetching recommendationAnime Data', error)
            }
        }


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