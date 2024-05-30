import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/Nav/NavigationBar'

import './PageStyling.css'
import { Container, Row, Col, NavLink } from 'reactstrap'
import { Map } from 'react-map-gl/maplibre'
import Country from '../components/Country/Country'
import "../../node_modules/maplibre-gl/dist/maplibre-gl.css";

function About() {
  const [coordinates, setCoordinates] = useState([]);

  function handleCountryChange(coords) {
    const updatePromise = new Promise((resolve) => {
      setCoordinates(coords, resolve);
    });
  
    updatePromise.then(() => {
      console.log(`final coords: ${coordinates}`);
    });
    console.log(`received ${coords}`);
  }

  useEffect(() => {
    if (coordinates) {
      
    }
  })

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
        <Row style={{ padding: '2rem 0 2rem 0' }}>
          <Col xs={8}>
            <Map
              initialViewState={{
                latitude: 51.5,
                longitude: -0.1,
                zoom: 5,
              }}
              mapStyle="https://api.maptiler.com/maps/5e4b20c9-ef20-43c3-b193-1b73b78bb177/style.json?key=EwzBAOd5pizuaQtP2h4o"
              style={{ height: 500, borderRadius: '15px'}}
            />
          </Col>
          <Col xs={4}>
            <Container className='map-container'>
              <h2>Places I've Visited</h2>
              <Country 
                code='CZ' 
                name='Prague, CZ'
                year='2024'
                lat='50.0'
                lon='14.4'
                sendCoords={handleCountryChange}
              />
              <Country
                code='NL'
                name='Amsterdam, NL'
                year='2024'
                lat='52.3'
                lon='4.8'
                sendCoords={handleCountryChange}
              />
              <Country
                code='GB'
                name='London, UK'
                year='2018'
                lat='51.5'
                lon='-0.1'
                sendCoords={handleCountryChange}
              />
              <Country
                code='HK'
                name='Hong Kong, HK'
                year='2017'
                lat='22.3'
                lon='114.1'
                sendCoords={handleCountryChange}
              />
              <Country 
                code='ID'
                name='Bali, ID'
                year='2016'
                lat='-8.3'
                lon='115.0'
                sendCoords={handleCountryChange}
              />
              <Country 
                code='SC'
                name='Mahé, SC'
                year='2012'
                lat='4.6'
                lon='55.4'
                sendCoords={handleCountryChange}
              />
              <Country
                code='MV'
                name='Malé, MV'
                year='2011'
                lat='3.2'
                lon='73.2'
                sendCoords={handleCountryChange}
              />
              <Country
                code='SG'
                name='Singapore, SG'
                year='2010'
                lat='1.3'
                lon='103.8'
                sendCoords={handleCountryChange}
              />
            </Container>
          </Col>
        </Row>
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
        {/* <Row>
          <h2>Photography</h2>
          <p>
            My Canon Powershot SX50 HS has accompanied me to most of the places I visit. To see some of my work in travel 
            and landscape photography, <NavLink href='#/about/photography' className='span'>click here</NavLink>.
          </p>
        </Row> */}
      </Container>
    </div>
  )
}

export default About