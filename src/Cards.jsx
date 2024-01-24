// importing components from React-bootstrap
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


// This is the main page for the Cards component
const Cards = () => {

    return(
        <>
            <div className="cards-container">
                <Card style={{ width: '21rem' }}>
                    <Card.Img className="cards-image" variant="top" src="https://reactjs.org/logo-og.png"/>
                    <Card.Body>
                        <Card.Title className="anime-title">Jujutsu Kaisen</Card.Title>
                        <Card.Subtitle className="anime-category">Isekai</Card.Subtitle>

                        {/* Card text if needed  */}
                        <Card.Text></Card.Text>

                        <Button className="view-more-btn" variant="primary">View more</Button>
                    </Card.Body>
                </Card>
                

                <Card style={{ width: '21rem' }}>
                    <Card.Img className="cards-image" variant="top" src="https://reactjs.org/logo-og.png"/>
                    <Card.Body>
                        <Card.Title className="anime-title">Jujutsu Kaisen</Card.Title>
                        <Card.Subtitle className="anime-category">Isekai</Card.Subtitle>

                        {/* Card text if needed  */}
                        <Card.Text></Card.Text>

                        <Button className="view-more-btn" variant="primary">View more</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: '20rem' }}>
                    <Card.Img className="cards-image" variant="top" src="https://reactjs.org/logo-og.png"/>
                    <Card.Body>
                        <Card.Title className="anime-title">Jujutsu Kaisen</Card.Title>
                        <Card.Subtitle className="anime-category">Isekai</Card.Subtitle>

                        {/* Card text if needed  */}
                        <Card.Text></Card.Text>

                        <Button className="view-more-btn" variant="primary">View more</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: '20rem' }}>
                    <Card.Img className="cards-image" variant="top" src="https://reactjs.org/logo-og.png"/>
                    <Card.Body>
                        <Card.Title className="anime-title">Jujutsu Kaisen</Card.Title>
                        <Card.Subtitle className="anime-category">Isekai</Card.Subtitle>

                        {/* Card text if needed  */}
                        <Card.Text></Card.Text>

                        <Button className="view-more-btn" variant="primary">View more</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: '20rem' }}>
                    <Card.Img className="cards-image" variant="top" src="https://reactjs.org/logo-og.png"/>
                    <Card.Body>
                        <Card.Title className="anime-title">Jujutsu Kaisen</Card.Title>
                        <Card.Subtitle className="anime-category">Isekai</Card.Subtitle>

                        {/* Card text if needed  */}
                        <Card.Text></Card.Text>

                        <Button className="view-more-btn" variant="primary">View more</Button>
                    </Card.Body>
                </Card>


                <Card style={{ width: '20rem' }}>
                    <Card.Img className="cards-image" variant="top" src="https://reactjs.org/logo-og.png"/>
                    <Card.Body>
                        <Card.Title className="anime-title">Jujutsu Kaisen</Card.Title>
                        <Card.Subtitle className="anime-category">Isekai</Card.Subtitle>

                        {/* Card text if needed  */}
                        <Card.Text></Card.Text>

                        <Button className="view-more-btn" variant="primary">View more</Button>
                    </Card.Body>
                </Card>
                

                
            </div>
            
        </>
    )
}

export default Cards