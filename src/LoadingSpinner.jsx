// Spinner component to be conditionally rendered if loading state is true.
import Spinner from 'react-bootstrap/Spinner'

const LoadingSpinner = () => {



  return (
    // Spinner component from react-bootstrap, "Loading..." is hidden, and is only visible to screen readers.
    <div className="spinner-container">
      <Spinner className="loading-spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    

  )
}

export default LoadingSpinner
