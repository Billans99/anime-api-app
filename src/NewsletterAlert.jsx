
import Alert from 'react-bootstrap/Alert'

const NewsletterAlert = () => {


    return(
        <>
        
            <Alert variant='dark' className="newsletter-alert">
            Want to sign up for our newsletter?&nbsp; 
            <Alert.Link href="#">Click here!</Alert.Link>
            </Alert>
        
        </>
    )
}

export default NewsletterAlert