
import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'


const Foo = () => {
    const myCallback = () => {
        console.log('hello')
    }

    return (
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
    )
}

export default Foo 