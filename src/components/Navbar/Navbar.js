import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import useScrollspy from './useScrollSpy';
import Logo from '../../images/logo.svg';
import './Navbar.css'

const navs = [
  'home',
  'info',
  'cybersecurity',
  'projects',
  'contact',
]

export default function NavbarComponent() {
  const active = useScrollspy(navs, window.screen.height/2)
  
  return (
    <Navbar fixed='top' expand="sm" collapseOnSelect> 
      <Container>
      {/* <Navbar.Brand href="/">gifuzzz</Navbar.Brand> */}
      <Navbar.Brand href="/"><Logo height={30} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav>
          {
            navs.map(name => (
              <Nav.Link
                key={name}
                className={['nav-link', active===name?'actual':''].join(' ')}
                onClick={
                  (event) => {
                    event.preventDefault();
                    scrollTo(`#${name}`);
                  }
                }
                href='#'
              >
                {name}
              </Nav.Link>
            ))
          }
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}