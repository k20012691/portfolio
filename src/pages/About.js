import React from 'react'
import NavigationBar from '../components/Nav/NavigationBar'

import './PageStyling.css'
import { Container, Row, Col, NavLink } from 'reactstrap'

function About() {
  return (
    <div className='page'>
      <NavigationBar />
      <Container>
        <h1>About</h1>
        <Row xs={2}>
          <Col>
            <h3 className='subtitle'>
              I specialise in front-end technologies (2D and 3D) from a design and development perspective.
            </h3>
            <p>
              My professional experiences include working at bp and Intropic in design and front-end engineering. 
              I've really enjoyed exploring the different spaces these companies operate in, and how they use 
              technology and design to address complex challenges in their respective fields.
            </p>
            <p>
              At university, I was actively involved with the Human-Computer Interaction (HCI) Lab run by 
              Dr Timothy Neate. For example, I built an interactive dashboard for assistive communication 
              devices as part of a research fellowship during my final year.
            </p>
          </Col>
          <Col>
          </Col>
        </Row>
        {/* <Row>
          Create map here
        </Row> */}
        <Row xs={2}>
          <Col>
            <h2>Sports</h2>
            <p>
              I've been watching and playing cricket since I was nine years old. Since moving to London, 
              I've represented two clubs:
            </p>
            <ul>
              <li>King's College London Cricket Club</li>
              <li>Old Albanian Cricket Club</li>
            </ul>
            <p>
              After getting bullied into watching the Netflix documentary 'Drive to Survive', my interests 
              have expanded into Formula 1. I'm a passionate Ferrari fan!
            </p>
          </Col>
          <Col>

          </Col>
        </Row>
        <Row>
          <h2>Photography</h2>
          <p>
            My Canon Powershot SX50 HS has accompanied me to most of the places I visit. To see some of my work in travel 
            and landscape photography, <NavLink href='/about/photography' className='span'>click here</NavLink>.
          </p>
        </Row>
      </Container>
    </div>
  )
}

export default About