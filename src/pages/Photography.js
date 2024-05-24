import React from 'react'
import NavigationBar from '../components/Nav/NavigationBar'
import { Container } from 'reactstrap'
import './PageStyling.css'

function Photography() {
  return (
    <div className='page'>
        <NavigationBar />
        <Container>
            <h1>Photography</h1>
        </Container>
    </div>
  )
}

export default Photography