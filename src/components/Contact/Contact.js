import React from 'react'
import { Container } from 'reactstrap'
import './Contact.css'

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Contact() {
  return (
    <Container id='flex-row'>
        <a href='mailto:vedeesh18@gmail.com'>
            <div id='icon-button'>
                <EmailIcon fontSize='large' htmlColor='#a1a1a1' />
            </div>
        </a>
        <a href='https://github.com/k20012691'>
            <div id='icon-button'>
                <GitHubIcon fontSize='large' htmlColor='#a1a1a1' />
            </div>
        </a>
        <a href='https://www.linkedin.com/in/vedeesh-bali/'>
            <div id='icon-button'>
                <LinkedInIcon fontSize='large' htmlColor='#a1a1a1' />
            </div>
        </a>
    </Container>
  )
}

export default Contact