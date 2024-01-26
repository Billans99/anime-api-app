// importing components from React-bootstrap import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState, useEffect } from 'react'



// function Cards() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch('https://api.jikan.moe/v4/anime?q=&sfw')
//             .then(response => response.json())
//             .then(data => setData(data.data));
//     }, []);

//     return (
//         <div>
//             {data.map(item => (
//                 <div key={item.id}>
//                     <h2>{item.attributes.titles.en}</h2>
//                     <img src={item.attributes.posterImage.small} alt={item.attributes.titles.en} />
//                 </div>
//             ))}
//         </div>
//     );
// }


// This is the main page for the Cards component
const Cards = () => {
    const [data, setData] = useState([])

//  Get data from Jikan API URL, then convert to JSON format, then set the data to the state.
const fetchData = () => { 
    return fetch('https://api.jikan.moe/v4/anime?q=&sfw') 
            .then((res) => res.json()) 
            .then((data) => setData(data)) 
            console.log('data', data.data)
    }
    
    useEffect(() => {
        fetchData();
    }, [])




    return(
        <>
             {/* iterate the data with map to the state and display it in the cards  */}
                 {data.map((item) => {(
                    <div className="cards-container">
                        <Card style={{ width: '21rem' }}>
                            <Card.Img className="cards-image" variant="top" src={item.images.jpg.image_url}/>
                            <Card.Body className="cards-body">
                                <Card.Title className="anime-title">{item.name}</Card.Title>
                                {item.genres.map((genre) => {
                                <Card.Subtitle className="anime-category">{item.genres.genre.name}</Card.Subtitle>
                                })}
                                {/* Card text if needed  */}
                                <Card.Text></Card.Text>
    
                                <Button className="view-more-btn" variant="primary">View more</Button>
                            </Card.Body>
                        </Card>
                    </div>
                  )})}
                

                

     
            
        </>
    )
}

export default Cards