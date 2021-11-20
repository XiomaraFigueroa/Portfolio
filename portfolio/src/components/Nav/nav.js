import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import {Link} from 'react-scroll';

class NavTop extends Component{
    render(){
        return(
            <Navbar fixed='top' style={{backgroundColor: '#fff'}} expand="lg">
            <Container fluid >
                <NavbarBrand>
                  {/* I left this here so I can make the hamburger menu come out on the right side */}
                </NavbarBrand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={styles.nav} >
                    <Nav.Item style={styles.navItem} >
                    <Link
                            href="/hero"
                            to="hero"
                            activeClass="active"
                            className="nav-link"
                            spy={true}
                            smooth={false}
                            offset={0}
                            duration={500}
                            style={styles.navLink}
                            >
                            Home
                        </Link>    
                    </Nav.Item>
                    <Nav.Item >
                        <Link
                            href="/about"
                            to="about"
                            activeClass="active"
                            className="nav-link"
                            spy={true}
                            smooth={false}
                            offset={0}
                            duration={500}
                            style={styles.navLink}
                            >
                            About
                        </Link>    
                    </Nav.Item>
                    <Nav.Item>
                        <Link
                            href="/projects"
                            to="projects"
                            activeClass="active"
                            className="nav-link"
                            spy={true}
                            smooth={false}
                            offset={0}
                            duration={500}
                            style={styles.navLink}
                            >
                            Projects
                        </Link>    
                    </Nav.Item>
                    <Nav.Item >
                    <Link
                            href="/contact"
                            to="contact"
                            activeClass="active"
                            className="nav-link"
                            spy={true}
                            smooth={false}
                            offset={0}
                            duration={1000}
                            style={styles.navLink}
                            >
                            Contact
                        </Link>    
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        )
    }  
}
export default NavTop;

const styles = {
    
    nav: {
        marginRight: '5rem',
        width: '100%',
        textAlign: 'center'
    },
    navLink: {
        fontFamily: 'Avenir Heavy, helvetica, san-serif'
    }
    
    
}