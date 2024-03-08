// import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


const Header = (props) => {

        

    return(
        <>
        {/* Heading text  */}
        <div className="heading-container">
            <h1 className="heading-title">
                Anime List
                {/* <Badge bg="primary">Hot</Badge> */}
            </h1>
        
                
            <div className="categories-container">
                
                <Button className="category-top" variant="primary">Top</Button>
                
                <Button className="category-popular" variant="success">Popular</Button>

                <Button className="category-recommendations" variant="warning">Recommendations</Button>

                <Button className="category-random" variant="secondary">Random</Button>

                <Button className="category-home" variant="dark">Home</Button>
                

            </div>


        </div>
        
       

        </>
    )
}

export default Header