import Badge from 'react-bootstrap/Badge'
import Stack from 'react-bootstrap/Stack'

const Header = () => {

    return(
        <>
        {/* Heading text  */}
        <div className="heading-container">
            <h1 className="heading-category">
                Popular Anime <Badge bg="primary">New</Badge>
            </h1>
        </div>

        <div className="search">
            <input type="text" placeholder="Search for popular anime titles..." />
        </div>

        </>
    )
}

export default Header