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
        
                {/* upcoming, popular, and search container  */}
            {/* <div className="categories-container"> */}


                {/* upcoming anime category (onClick function)  */}
                {/* <Button className="upcoming-category" variant="primary">Upcoming</Button> */}
                
                {/* popular anime category (onClick function) */}
                {/* <Button className="popular-category" variant="warning">Popular</Button> */}

                
                {/* <div className="search-container"> */}
                    {/* Search bar  */}
                    {/* <input className="search-bar" name="search-form" id="search-form" type="search" placeholder="Search for anime titles..." /> */}
                    
                    {/* Search button  */}
                    {/* <Button className="search-button" variant="primary" size="sm"> */}
                        {/* Search */}
                     {/* </Button> */}
                {/* </div> */}

            {/* </div> */}


        </div>
        
       

        </>
    )
}

export default Header