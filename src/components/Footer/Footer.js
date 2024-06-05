import React from 'react'
import { Container } from 'reactstrap'
import './Footer.css'
import Contact from '../Contact/Contact'

function Footer() {
  return (
    <Container className='footer'>
      <span id='code'>Pixels and code pushed by Vedeesh Bali &copy; 2024</span>
      <Contact />
    </Container>
  )
}

export default Footer