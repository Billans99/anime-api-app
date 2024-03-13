import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const RandomAnimeCards = (props) => {

    const [randomAnimeData, setRandomAnimeData] = useState()
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(1)



    useEffect(() => {
        getRandomAnimeData()
    }, [count])




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

       
 

        const handleMoreRandomAnimeClick = () => {
            setCount(count + 1)
          }



          console.log('randomAnimeData', randomAnimeData)

    


        return(
            <>

            <div className="random-card-container">
                {randomAnimeData && randomAnimeData.map((anime) => {

                    return(
                        <>
                        <h3 className="random-card-header-title">

                            Title: {anime.title_english} {anime.title_japanese} 

                            <span className="more-random-btn-container">
                                <Button className="more-random-btn" variant="primary" onClick={() => handleMoreRandomAnimeClick()}>Find Another Random Anime</Button>
                            </span>

                        </h3>

                        <div className="random-card-flex-container">

                            <div className="random-card-body-container">
                                
                                <h3 className="random-card-summary-heading">Summary</h3>
                                {anime.synopsis ? <p className="random-card-summary">{anime.synopsis}</p> : <p className="random-card-summary">This summary is not available</p>}

                                <h3 className="random-card-background-heading">Background</h3>
                                {anime.background ? <p className="random-card-background">{anime.background}</p> : <p className="random-card-background">The background for this anime is not available</p>}
                                
                                <p>Rating: {anime.rating}</p>

                                <p>Score: {anime.score} / 10</p>

                                <p>Anime Rank: {anime.rank}</p>

                                <p>Popularity: {anime.popularity}</p>

                                <p>status: {anime.status}</p>

                                <p>Season: {anime.season}</p>

                                <p>Year: {anime.year}</p>

                                <p>Learn more here: <a href={anime.url}>{anime.url}</a></p>
                            </div>

                            <div className="random-card-image-container">
                                <img className="random-card-image" src={anime.images.jpg.large_image_url} alt="An image of a random anime"></img>
                            </div>

                        </div>

                        


                        
                        
                        </>
                    )
                })}

            </div>
                    

        </>
    )
}

export default RandomAnimeCards