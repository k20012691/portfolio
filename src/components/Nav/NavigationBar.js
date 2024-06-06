import React from 'react'
import { NavItem, NavLink, Navbar, NavbarBrand, Nav } from 'reactstrap'
import './NavStyle.css'
import { motion } from 'framer-motion'

import logo from '../../assets/img/icon.png'

function NavigationBar() {
    const variants = {
        hidden: { opacity: 0, translateX: -20 },
        hover: { opacity: 1, translateX: 0 }
    }
  return (
    <>
        <Navbar color='white' className='nav'>
            <NavbarBrand href='#/'>
                <motion.div whileHover='hover' className='navbar-brand'>
                    <motion.img src={logo} height='28px' alt='Branding' />
                    <motion.span id='branding' variants={variants} initial={variants.hidden}>
                        Vedeesh Bali
                    </motion.span>
                </motion.div>
            </NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink href='#/about'>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='#/projects'>Projects</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </>
  )
}

export default NavigationBar