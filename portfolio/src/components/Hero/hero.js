import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'

class Hero extends Component {
    render(){
        return(
           
            <Container id='hero' style={styles.container} >
                    <h1 style={styles.h1} >Xiomara Figueroa</h1>
                    <h2 style={styles.h2} >Front-end Web Developer</h2>
            </Container>
        )
    }
}
export default Hero;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        maxWidth: '90%'
    },
    h1: {
        fontSize: '10rem',
        fontFamily: 'Valencia, san-serif'
    },
    h2: {
        fontSize: '4rem',
        fontFamily: 'Avenir Roman, helvetica, san-serif'
    },
}