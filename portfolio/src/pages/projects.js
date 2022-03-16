import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Cards from '../components/Card/card';
import {projects} from '../data/data';

class Projects extends Component{

   
    render(){
  
        return(
            <Container id='projects' style={styles.container}>
                
                    <h1 style={styles.h1} >PROJECTS</h1>
                    {/* This loops through all the projects that are in the data.js file and returns each project in a card. */}
                    {projects.map((project, i)=>{
                        return <Row style={styles.row}>
                            <Col md={12} lg={4}>
                            <Cards key={i} image={project.klash.image} title={project.klash.title} description={project.klash.description} href="/klash" to="klash" style={styles.cards} />
                            </Col>
                            <Col md={12} lg={4}>
                            <Cards key={i} image={project.covid.image} title={project.covid.title} description={project.covid.description} href="/covid" to="covid" style={styles.cards} />
                            </Col>
                            <Col md={12} lg={4}>
                            <Cards key={i} image={project.tournApp.image} title={project.tournApp.title} description={project.tournApp.description} href="/tournApp" to="tournApp" style={styles.cards} />
                            </Col>
                        </Row>})}
                
        </Container>
            
        )
    }
}
export default Projects;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        maxWidth: '90%',
    },
    row: {
        display: 'flex',
        justifyContent:'space-between',
    },
  h1: {
        fontSize: '6.3rem',
        fontFamily: 'Avenir Heavy, helvetica, san-serif',
        color: '#eeeeee',
        marginBottom: '3rem'
    },
    cards: {
        border: '1px solid #eeeeee',
        borderRadius: '5px',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2)',
        fontFamily: 'Avenir Heavy, helvetica, san-serif',
        fontSize: '1.25rem',
        margin: '1rem',
        
    },
    
}