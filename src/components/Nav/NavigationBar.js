import React from 'react'
import { NavItem, NavLink, Navbar, NavbarBrand, Nav } from 'reactstrap'
import './NavStyle.css'

import logo from '../../assets/img/NavbarBranding.png'

function NavigationBar() {
  return (
    <>
        <Navbar color='white' className='nav'>
            <NavbarBrand href='#/'>
                <img src={logo} alt='Logo' height='28px' />
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