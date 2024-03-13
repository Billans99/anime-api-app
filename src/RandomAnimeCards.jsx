import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const RandomAnimeCards = () => {

    const [randomAnimeData, setRandomAnimeData] = useState()
    const [loading, setLoading] = useState(false)
    



    useEffect(() => {
        getRandomAnimeData()
    }, [])




    // Fetch random anime data from random anime endpoint
    const getRandomAnimeData = async () => {
            try {
                // if (loading) return

                // setLoading(true)
                const response = await axios.get('https://api.jikan.moe/v4/random/anime')
                console.log('randomAnimeResponse', response)
                setRandomAnimeData([response.data.data])
                // setLoading(false)

            } catch (error) {
                console.error('Error fetching randomAnime Data', error)
            }
        }

        console.log('randomAnimeData', randomAnimeData)

 
    
        return(
            <>

            <div className="random-card-container">
                {randomAnimeData && randomAnimeData.map((anime) => {

                    return(
                        <>
                        <div className="random-card-header-container">

                            <h3 className="random-card-header-title">Title: {anime.title_english} | {anime.title_japanese}</h3>

                            <img className="random-card-header-image" src={anime.images.jpg.large_image_url} alt="An image of a random anime"></img>
                        </div>


                        <div className="random-card-body-container">
                            <h3>Summary</h3>
                            {anime.synopsis ? <p>{anime.synopsis}</p> : <p>This summary is not available</p>}
                            

                            <h3>Background</h3>
                            {anime.background ? <p>{anime.background}</p> : <p>The background for this anime is not available</p>}
                            
                            
                            <p>Rating: {anime.rating}</p>

                            <p>Score: {anime.score} / 10</p>

                            <p>Anime Rank: {anime.rank}</p>

                            <p>Popularity: {anime.popularity}</p>

                            <p>status: {anime.status}</p>

                            <p>Season: {anime.season}</p>

                            <p>Year: {anime.year}</p>

                            <p>URL: {anime.url}</p>
                        </div>
                        
                        </>
                    )
                })}

            </div>
            

                {/* Map each anime anime to a card  */}
                

                    {/* // Cards that display anime titles and view-more button that opens view-more modal  */}
                    {/* <div className="random-card-container">
                        <div className="random-card-image">
                            <img src={randomAnimeData.images.jpg.image_url} alt="An image of a random anime"></img>
                        </div>
                        
                        
                    
                    </div> */}
                    

        </>
    )
}

export default RandomAnimeCards