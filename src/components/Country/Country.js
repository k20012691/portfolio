import React from 'react'
import './Country.css'
import { Container } from 'reactstrap'
import Flag from 'react-world-flags'

function Country(props) {

  function handleClick(lat, lon) {
    props.sendCoords([props.lat, props.lon])
  }

  return (
    <Container 
        className='country' 
        onClick={() => handleClick()}
    >
        <Flag 
            code={props.code}
            height={40}
            width={60}
        />
        <Container className='label'>
            <div id='title'>
                {props.name}
            </div>
            <div id='year'>
                {props.year}
            </div>
        </Container>
    </Container>
  )
}

export default Country