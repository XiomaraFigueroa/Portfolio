import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Hero from '../components/Hero/hero'
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import Nav from '../components/Nav/nav';

class Home extends Component {

    render(){
        return(
            <Container  fluid>
                <div style={styles.container} >

                
                <Nav />
                
                {/* Hero */}
                <Hero />
             
                {/* About Section*/}
                <About />
                   
                {/* Projects Section*/}
                <Projects /> 

                {/* Contact Section */}
                <Contact />
                
                </div>
                
            </Container>
        )
    }
}
export default Home;

const styles = {
    
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh'
    }
}