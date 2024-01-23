import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

const Header = () => {

    return(
        <>
        <div className="heading-container">
            <h1 className="heading-category">
                Popular Anime <Badge bg="primary">New</Badge>
            </h1>
        </div>


        </>
    )
}

export default Header