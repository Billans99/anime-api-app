import Button from 'react-bootstrap/Button';
import React from 'react'

const Foo = () => {
    const myCallback = () => {
        console.log('hello')
    }

    function myCallback2() {
        console.log('hello2')
    }


    return (
        <div>
             <Button onClick={() => {console.log('hello')}} variant="warning">asdasdasdas</Button>
            
        </div>
    )
}

export default Foo 