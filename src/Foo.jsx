
import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

const Foo = () => {
    const myCallback = () => {
        console.log('hello')
    }

    return (
        <>
        <div>
            <h3 className="categories-heading">Anime Categories</h3>
            <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Slice of Life</Accordion.Header>
                <Accordion.Body>
                    Slice of life anime is all about...
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="1">
                <Accordion.Header>Isekai</Accordion.Header>
                <Accordion.Body>
                    Isekai anime is all about...
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
                <Accordion.Header>Romance</Accordion.Header>
                <Accordion.Body>
                    Romance anime is all about...
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="3">
                <Accordion.Header>Fantasy</Accordion.Header>
                <Accordion.Body>
                    Fantasy anime is all about...
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>

        <div>
        <Alert key={'primary'} variant={'primary'}>
          Take a guess at what the most popular anime in 2021 was!
        </Alert>
        <Alert key={'success'} variant={'success'}>
          Your guess is correct! Attack on Titan was the most popular anime in 2021!
        </Alert>
        <Alert key={'warning'} variant={'warning'}>
          Your guess was close! Chainsaw man was the second most popular anime in 2021!
        </Alert>

        </div>
       </>
    )
}

export default Foo 