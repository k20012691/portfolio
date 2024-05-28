import React from 'react'
import NavigationBar from '../components/Nav/NavigationBar'

import './PageStyling.css'
import synapseVR_img from '../assets/img/synapseVR_img.svg'
import aac_img from '../assets/img/AAC.svg'
import bookgle_img from '../assets/img/bookgle.svg'
import codarsnacht_img from '../assets/img/Codarsnacht.svg'
import flatm8_img from '../assets/img/Flatm8.svg'
import sdd_img from '../assets/img/SDD.svg'
import f1_img from '../assets/img/F1DataVis.svg'
import arrow from '../assets/img/arrow.svg'
import { Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Container } from 'reactstrap'

function Portfolio() {
  return (
    <div className='page'>
      <NavigationBar />
      <Container>
        <h1>Projects</h1>
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
        <CardGroup>
        <Card>
            <CardImg 
              src={bookgle_img}
              alt='Bookgle'
            />
            <CardBody>
            <a href='https://github.com/duncanlauu/MineSweepers-Major-Group-Project'>
              <CardTitle tag='h5'>
                bookgle
                <img className='text-icon' src={arrow} alt='Arrow Icon' />
              </CardTitle>
              </a>
              <CardText>A book-themed social media platform. Equipped with a recommender system for new books and clubs.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg 
              src={flatm8_img}
              alt='Flatm8'
            />
            <CardBody>
              <CardTitle tag='h5'>
                flatm8
                <img className='text-icon' src={arrow} alt='Arrow Icon' />
              </CardTitle>
              <CardText>A finance and task management iOS application catered towards university students living in flats.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg 
              src={sdd_img}
              alt='Sleep Deprived Dreamers'
            />
            <CardBody>
            <a href='https://sleepdepriveddreamers.com/'>
              <CardTitle tag='h5'>
                Sleep Deprived Dreamers
                <img className='text-icon' src={arrow} alt='Arrow Icon' />
              </CardTitle>
              </a>
              <CardText>A website for an edtech startup hosted on Knorish. Increased traffic by 24% and conversion rate by 11%.</CardText>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup style={{ 
          width: '34.5%'
         }}>
          <Card>
            <CardImg 
              src={codarsnacht_img}
              alt='Codarsnacht'
            />
            <CardBody>
              <a href='https://marketplace.visualstudio.com/items?itemName=Vedeesh-Bali.codarsnacht'>
                <CardTitle tag='h5'>
                  codarsnacht
                  <img className='text-icon' src={arrow} alt='Arrow Icon' />
                </CardTitle>
              </a>
              <CardText>A dark, high-contrast theme for Visual Studio Code. Currently available on the Marketplace.</CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </Container>
    </div>
  )
}

export default Portfolio