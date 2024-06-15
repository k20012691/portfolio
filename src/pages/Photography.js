import React from 'react'
import NavigationBar from '../components/Nav/NavigationBar'
import { Container } from 'reactstrap'
import './PageStyling.css'
import { Gallery } from 'react-grid-gallery'

import prague1 from '../assets/img/photography/Photo1.JPEG'
import prague2 from '../assets/img/photography/Photo2.jpg'
import prague3 from '../assets/img/photography/Photo3.JPEG'
import prague4 from '../assets/img/photography/Photo4.JPEG'
import nl1 from '../assets/img/photography/Photo5.JPG'
import nl2 from '../assets/img/photography/Photo6.JPEG'
import nl3 from '../assets/img/photography/Photo7.JPG'
import nl4 from '../assets/img/photography/Photo8.JPG'
import goa1 from '../assets/img/photography/Photo9.JPG'
import goa2 from '../assets/img/photography/Photo10.JPG'
import br1 from '../assets/img/photography/Photo11.JPG'
import br2 from '../assets/img/photography/Photo12.JPG'
import cricket1 from '../assets/img/photography/Photo13.JPG'
import cricket3 from '../assets/img/photography/Photo15.JPG'
import Footer from '../components/Footer/Footer'

function Photography() {

  const images = [
    {
      src: prague1,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Statue of Francis Xavier, Charles Bridge</div>
        </div>
      ),
    },
    {
      src: prague2,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Church of St Francis of Assisi, Prague</div>
        </div>
      ),
    },
    {
      src: prague3,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Wenceslas Square, Prague</div>
        </div>
      ),
    },
    {
      src: prague4,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Peacock, Prague Castle</div>
        </div>
      ),
    },
    {
      src: nl1,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>A'Dam Tower, Amsterdam</div>
        </div>
      ),
    },
    {
      src: nl2,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Circuit Zandvoort, The Netherlands</div>
        </div>
      ),
    },
    {
      src: cricket3,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>James Anderson, Lord's Cricket Ground</div>
        </div>
      ),
    },
    {
      src: nl3,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Centraal, Amsterdam</div>
        </div>
      ),
    },
    {
      src: nl4,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Amstel 332, Amsterdam</div>
        </div>
      ),
    },
    {
      src: goa1,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Nephila Pilipes, Goa</div>
        </div>
      ),
    },
    {
      src: goa2,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Tropical Spice Plantations, Goa</div>
        </div>
      ),
    },
    {
      src: br1,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Pigeons, Brighton</div>
        </div>
      ),
    },
    {
      src: br2,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>European Herring Gull, Brighton Beach</div>
        </div>
      ),
    },
    {
      src: cricket1,
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>Scott Boland, Oval Cricket Ground</div>
        </div>
      ),
    },
  ]

  return (
    <div className='page'>
        <NavigationBar />
        <Container>
            <h1>Photography</h1>
            <Gallery 
              images={images}
              enableImageSelection={false}
            />
        </Container>
        <Footer />
    </div>
  )
}

export default Photography