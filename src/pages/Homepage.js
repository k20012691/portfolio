import React from 'react'
import NavigationBar from '../components/Nav/NavigationBar'

import './PageStyling.css'
import f1_img from '../assets/img/F1DataVis.svg'
import arrow from '../assets/img/arrow.svg'
import synapseVR_img from '../assets/img/synapseVR_img.svg'
import aac_img from '../assets/img/AAC.svg'
import { Col, Container, Row, Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Button } from 'reactstrap'
import Footer from '../components/Footer/Footer'

import image from '../assets/img/WebsiteImage 2.jpeg'

function Homepage() {
  return (
    <div className='page'>
      <NavigationBar />
      <Container>
        <Row xs={2}>
          <Col xs={7}>
          <h1 className='landing-title'>Vedeesh Bali</h1>
            <p className='landing-para'>
              I'm a front-end engineer and designer based in London, UK. Currently, I'm building immersive environments at bp.
            </p>
            <p className='landing-para'>
              I like Rubik's Cubes, rollerblading, and people willing to watch sports with me.
            </p>
          </Col>
          <Col xs={5}>
            <img src={image} alt='Portrait' height='500px' style={{ paddingLeft: '2rem' }} />
          </Col>
        </Row>
        <Row style={{ marginTop: '8vw' }}>
          <h1>Featured Work</h1>
          <CardGroup>
          <Card>
                <CardImg 
                  src={synapseVR_img}
                  alt='SynapseVR'
                />
                <CardBody>
                  <a href='#/projects/synapsevr'>
                    <CardTitle tag='h5'>
                      synapseVR
                      <img className='text-icon' src={arrow} alt='Arrow Icon' />
                    </CardTitle>
                  </a>
                  <CardText>An AI-enabled learning platform for 3D tools like Blender. Operates in a virtual reality environment.</CardText>
                </CardBody>
          </Card>
          <Card>
            <CardImg 
                src={f1_img}
                alt='F1 Data Visualisation'
              />
              <CardBody>
                <CardTitle tag='h5'>
                  F1 Data Visualisation
                  <img className='text-icon' src={arrow} alt='Arrow Icon' />
                </CardTitle>
                <CardText>An interactive visualisation evaluating tire strategies employed by drivers and teams in Formula 1.</CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg 
                src={aac_img}
                alt='AAC Dashboard'
              />
              <CardBody>
              <a href='https://k20012691.github.io/aac-visualisation/'>
                <CardTitle tag='h5'>
                  AAC Dashboard
                  <img className='text-icon' src={arrow} alt='Arrow Icon' />
                </CardTitle>
                </a>
                <CardText>A dashboard collating academic research surrounding AAC devices across different modalities.</CardText>
              </CardBody>
            </Card>
          </CardGroup>
        <Container style={{ padding: 0, marginRight: 0 }}>
        <Button tag='a' href='#/projects'>
          Show All
        </Button>
        </Container>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Homepage