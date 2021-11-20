import React from 'react';
import {projects } from '../data/data'
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from 'react-icons/bs';
import Container from 'react-bootstrap/Container'

const Covid = () => {
   
   
    const navigate = useNavigate();
        
        return(
           <Container style={styles.container} >
           <button style={styles.button} onClick={() => navigate(-1)}>
                <BsChevronLeft style={{marginRight: '0.5rem'}} /> BACK
            </button>
            {projects.map((project)=>{
                return<Carousel style={styles.slider} fade >
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block "
                            src={project.covid.comps.globalMap}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Global Map</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block "
                            src={project.covid.comps.globalMap_Results}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Global Map Results</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.covid.comps.usMap}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>US Map</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.covid.comps.usMap_Results}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>US Map Results</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    </Carousel>
            
            })}
            </Container>
        )
    
}
export default Covid;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        minHeight: '100vh',
        maxWidth: '90%',
    },
    button: {
        display: 'flex',
        backgroundColor:'#fff' ,
        color: '#000',
        border: 'none',
        borderRadius: '5px',
        fontFamily: 'Avenir Roman, helvetica, san-serif',
        alignItems: 'center', 
        marginLeft: '2rem'

    },
    slider: {
        maxHeight: '50rem',
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
    }
    
}