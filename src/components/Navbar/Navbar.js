import React, { useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import scrollTo from 'gatsby-plugin-smoothscroll';
import useScrollspy from './useScrollSpy';
import Logo from '../../images/logo.svg';
import './Navbar.css'
import { GiDeathStar, GiPyromaniac } from 'react-icons/gi';
import useDarkMode from '@fisch0920/use-dark-mode';

const navs = [
  'home',
  'info',
  'cybersecurity',
  'projects',
  'contact',
]

export default function NavbarComponent() {
  const active = useScrollspy(navs);
  const [navDark, setNavDark] = React.useState(false);
  const darkMode = useDarkMode(false);
  useEffect(() => {
    setNavDark(darkMode.value);
  }, [darkMode]);

  return (
    <Navbar fixed='top' expand="sm" collapseOnSelect variant={navDark ? 'dark' : 'light'}> 
      <Container>
      {/* <Navbar.Brand href="/">gifuzzz</Navbar.Brand> */}
      <Navbar.Brand href="#"><Logo height={30} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
        <Nav>
          {
            navs.map(name => (
              <Nav.Link
                key={name}
                className={ active === name ? 'actual' : undefined }
                onClick={
                  (event) => {
                    event.preventDefault();
                    scrollTo(`#${name}`);
                  }
                }
              >
                {name}
              </Nav.Link>
            ))
          }
          <Nav.Link
            key={'darkMode'}
          >
            { darkMode.value ?
              <GiPyromaniac
                onClick={darkMode.disable}
                size={22}
              />
              : 
              <GiDeathStar
                onClick={darkMode.enable}
                size={22}
              />
            }
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}