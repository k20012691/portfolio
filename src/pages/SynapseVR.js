import React, { useEffect } from 'react'
import './PageStyling.css'
import NavigationBar from '../components/Nav/NavigationBar'
import { Container } from 'reactstrap'

import splashImg from '../assets/img/synapseVR/Frame 64.png'
import processImg from '../assets/img/synapseVR/DT_Process.png'
import researchImg from '../assets/img/synapseVR/Research.png'
import problemStatementMapImg from '../assets/img/synapseVR/ProblemStatementMap.png'
import matrixImg from '../assets/img/synapseVR/2x2Matrix.png'
import storyboardImg from '../assets/img/synapseVR/Storyboard.jpeg'
import personasImg from '../assets/img/synapseVR/Personas.png'
import modificationsImg from '../assets/img/synapseVR/Modifications.png'
import mappingImg from '../assets/img/synapseVR/2d3dMapping.png'
import prototypingImg from '../assets/img/synapseVR/Prototyping.png'
import sybotImg from '../assets/img/synapseVR/SyBot.png'
import ImgSlide, { ImgSlideHorizontal } from '../components/ImgSlide/ImgSlide'

function SynapseVR() { 

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='page'>
      <NavigationBar />
      <Container>
        <ImgSlide damping={8} children={
          <img src={splashImg} alt='Poster' width='100%' id='splash-img' />
        }>
        </ImgSlide>
        <p className='project'>
        My journey before starting at bp was a multifaceted one. I had worked with many tools and technologies 
        spread out across software development, UI design, testing, and productivity. 
        This technical background is what got me placed onto the metaverse team, where it was made to take a dimensional leap. 
        </p>
        <p className='project'>
        Working on interactive and immersive environments meant I needed to expand my abilities to the realm of three 
        dimensions; specifically, Blender and Unity. The familiar interfaces of 2D software gave way to complex 3D navigation, 
        unfamiliar terminology, and a whole new way of thinking spatially. It was like learning a new language, with a steep learning curve.
        </p>
        <Container className='img-container'>
        <ImgSlideHorizontal translateX={-50} damping={8} children={
          <img src={mappingImg} alt='2D to 3D' height='200' />
        }
        />
        </Container>
        <p className='project'>
        I attempted to conquer this hurdle by diving deep into the available online resources - YouTube videos, online courses, and blogposts. 
        While these were valuable and ultimately did help me reach my goal, they also shared a common limitation: they were also inherently two-dimensional.
        </p>
        <h2>So What's Next?</h2>
        <p className='project'>
        Technically, the available resources do a good job when it comes to helping learners expand their skill sets to 
        three-dimensional design and development tools. However, the experience of working with such tools in a real space 
        could have serious merit. With the advent of augmented reality (AR) and virtual reality (VR) devices, 
        I expected there to be something compatible that could bridge the gap between theory and practical application 
        in 3D design learning. Additionally, artificial intelligence (AI) could greatly enhance the experience of learning. 
        However, none could be found. 
        </p>
        <h2>Bridging The Gap</h2>
        <p className='project'>
        The key to this solution lay in understanding users’ attitudes towards e-learning platforms and their own learning 
        habits. For those who are employed full-time, how do they strike a balance between personal development and task efficiency? 
        How can we utilise evolving technology such as AI to our advantage in this space?
        </p>
        <h2>My Process</h2>
        <p className='project'>
        The design thinking model was followed for this project. After synthesising insights from user interviews, 
        a problem statement was defined and different ideas were explored. This led to prototyping across different 
        fidelities and validating them with actual users. Based on the feedback, a second iteration of prototyping was 
        conducted to iron out creases in the solution.
        </p>
        <Container className='img-container'>
        <ImgSlideHorizontal translateX={50} damping={8} children={
          <img src={processImg} alt='Design Thinking Model' />
        } />
        </Container>
        <h2>User Research</h2>
        <p className='project'>
        Interviews were conducted with the primary objective of understanding people’s perceptions, needs, 
        and concerns around using AI tools for the purpose of upskilling and development. 
        Some questions from the interview guide have been shown below.
        </p>
        <Container className='img-container' style={{ padding: '2rem' }}>
          <ul id='research-questions'>
            <li>
            How do you typically prefer to learn about new technologies you use at work?
            </li>
            <li>
            How do you pursue education opportunities outside of a work environment?
            </li>
            <li>
            What are some concerns you might have around AI as an educational tool?
            </li>
          </ul>
        </Container>
        <p className='project'>
        Users’ thoughts were transcribed and collated into different themes via affinity diagrams. 
        The two key themes that stood out were (1) Building trust through personality in AI and (2) 
        Widening AI tool applicability via flexible learning.
        </p>
        <Container className='img-container'>
          <ImgSlideHorizontal translateX={50} damping={8} children={
            <img src={researchImg} alt='Affinity Diagrams' width='100%' />
          } />
        </Container>
        <Container className='img-container'>
          <ImgSlideHorizontal translateX={-50} damping={8} children={
            <img src={problemStatementMapImg} alt='Problem Statement Map' width='100%' />
          }
        />
        </Container>
        <h2>Defining The Problem</h2>
        <Container className='img-container' style={{ paddingTop: 0 }}>
          <ImgSlide
            children={
              <span id='problem-statement'>
              “Designers and developers at bp lack access to
              interactive and engaging learning materials when they
              are trying to expand their skill set into 3D technologies.
              This hinders their ability to quickly and effectively utilise
              AI for up-skilling purposes across a variety of roles.”
              </span>
            }
            damping={10}
          />
        </Container>
        <p className='project'>
        Determining the root causes behind the insights collected from users was crucial for the 
        creation of a problem statement. To ensure that this statement matched the initial focus 
        on learning opportunities in the 3D development and design space, it was targeted towards 
        engineers and designers who wanted to expand their skill set into such tools.
        </p>
        <Container className='img-container'>
          <ImgSlideHorizontal translateX={50} damping={8} children={
            <img src={personasImg} alt='Personas' width='100%' />
          }
        />
        </Container>
        <p className='project'>
        From these four user groups, I proceeded to create a storyboard entailing my desired user experience with regards to the product.
        </p>
        <Container className='img-container'>
          <ImgSlideHorizontal translateX={-50} damping={8} children={
            <img src={storyboardImg} alt='Storyboard' width='100%' />
          }
        />
        </Container>
        <h2>App Features and Specifications</h2>
        <p className='project'>
        By considering how different users interacted with the product in the storyboard, I was able to draft a set of specifications or 
        technical requirements for it. These were polished into features which were prioritised using a 2×2 matrix.
        </p>
        <Container className='img-container'>
          <ImgSlideHorizontal translateX={50} damping={8} children={
            <img src={matrixImg} alt='Feature Prioritisation Matrix' width='100%' />
          }
          />
        </Container>
        <p className='project'>
        To further define the set of actions available to users within the program, a navigational flow was created that maps out the 
        different states users can find themselves in.
        </p>
        <h2>The Making of SynapseVR</h2>
        <p className='project'>
        The initial look and feel of the application was developed on paper. This was useful to test navigational flow and page layout. 
        This was later polished into digital prototypes across two fidelities (low and medium) which was used for usability testing. 
        Feedback from these tests was integrated into the final mockups. 
        </p>
        <Container className='img-container'>
          <ImgSlideHorizontal translateX={-50} damping={8} children={
            <img src={prototypingImg} alt='Prototyping Stages' width='100%' />
          }
          />
        </Container>
        <p className='project'>
        An important aspect of the user interface is SyBot, the AI agent responsible for allocating users to a proficiency level, 
        walking them through the course, and evaluating their tasks using comparable real-world examples. His appearance took 
        inspiration from several existing robots across TV shows and animated movies. The baby face effect, which was applied to a 
        number of these robots, played a part in SyBot’s development too. 
        </p>
        <Container className='img-container'>
          <ImgSlideHorizontal translateX={-50} damping={8} children={
            <img src={sybotImg} alt='SyBot' width='100%' />
          }
          />
        </Container>
        <h2>Testing and Validation</h2>
        <p className='project'>
        Participants were interviewed with the high-fidelity prototypes to evaluate their effectiveness and efficiency. 
        This was measured using a few pre-defined tasks (such as finding the module directory and selecting a particular module) 
        with a pass/fail classification for each of them.
        </p>
        <p className='project'>
        While my tasks achieved a perfect pass rate, I made some key observations while observing my participants go about them. 
        These were clarified as additional feedback on the product. My results were compiled into a report, which recommended 
        changes across three levels: critical, major/minor, and cosmetic.
        </p>
        <Container className='img-container' style={{ padding: '2rem 0rem' }}>
          <ImgSlideHorizontal translateX={50} damping={8} children={
            <img src={modificationsImg} alt='Product Modifications' width='100%' />
          }
          />
        </Container>
        <h2>Final Product</h2>
        <iframe title='Final Mockup' width="100%" height='800' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Ftv6Xw0QbdP5tLpVDEfBdey%2FAI-Education-Prototypes%3Fnode-id%3D208-193%26t%3DgEM7y5omJfgx2ZET-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D208%253A193%26show-proto-sidebar%3D1&hide-ui=1" allowfullscreen></iframe>
        </Container>
    </div>
  )
}

export default SynapseVR