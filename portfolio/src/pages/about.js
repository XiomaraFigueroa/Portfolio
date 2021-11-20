import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component{
    render(){
        return(
            
                <Container id='about' style={styles.container} >
                     <h1 style={styles.aboutMe} >ABOUT ME</h1>
                    <Row>
                       
                        {/* Brief info column */}
                        <Col md={12} lg={6}>
                        
                            <p style={styles.p}>
                                I’m a passionate full-stack web developer who enjoys building incredible products,
                                and focuses on utilizing the power of technology to solve problems for different companies.
                            </p>
                    
                        </Col>
                        {/* Skills column */}
                        <Col md={12} lg={6} >
                            
                                <h2 style={styles.h2}>SKILLS:</h2>
                                <ul style={styles.ul}>
                                    <li style={styles.li}>HTML</li>
                                    <li style={styles.li}>CSS</li>
                                    <li style={styles.li}>JAVASCRIPT</li>
                                    <li style={styles.li}>REACT</li>
                                    <li style={styles.li}>NODE</li>
                                    <li style={styles.li}>EXPRESS</li>
                                    <li style={styles.li}>MySQL</li>
                                    <li style={styles.li}>GIT</li>
                                </ul>  
                            
                            
                        </Col> 
                    </Row>  
                </Container>
            
        )
    }
}
export default About;

const styles = {
   container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        minHeight: '100vh',
        maxWidth: '90%'
   },
    
    p: {
        fontFamily: 'Avenir Light, helvetica, san-serif',
        fontSize: '2.4rem',
    },
    
    ul:{
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none'
    },
    li:{
        textAlign: 'center',
        border: '1px solid #9b1d20',
        borderRadius: '5px',
        margin: '1rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        fontFamily: 'Avenir Light, helvetica, san-serif',
        fontSize: '1.6rem'
    },
    
    h2:{
        marginTop: '0.5rem',
        marginLeft: '3rem',
        fontFamily: 'Avenir Roman, helvetica, san-serif',
        fontSize: '2.4rem'
    },
    aboutMe: {
        fontSize: '6.3rem',
        fontFamily: 'Avenir Heavy, helvetica, san-serif',
        color: '#eeeeee',
        marginBottom: '3rem'
    },
    
}