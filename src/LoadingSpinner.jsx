
import Spinner from 'react-bootstrap/Spinner'

const LoadingSpinner = () => {



  return (

    <div className="spinner-container">
      <Spinner className="loading-spinner" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    

  )
}

export default LoadingSpinner
