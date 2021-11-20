import React from 'react';
import {projects } from '../data/data'
import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from 'react-icons/bs';
import Container from 'react-bootstrap/Container'

const Klash = () => {
   

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
                            className="d-block"
                            src={project.klash.comps.home}
                            alt="First slide"
                            width='25%'
                            height='25%'

                            />
                        <Carousel.Caption style={{color: '#000'}}>
                        <h3>Home</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.klash.comps.about}
                            alt="First slide"
                            width='22%'
                            height='22%'
                        />
                        <Carousel.Caption style={{color: '#000'}}>
                        <h3>About</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.klash.comps.eventOne}
                            alt="First slide"
                            width='31%'
                            height='31%'
                        />
                        <Carousel.Caption style={{color: '#000'}}>
                        <h3>Events</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.klash.comps.eventDetails}
                            alt="First slide"
                            width='35%'
                            height='35%'
                        />
                        <Carousel.Caption style={{color: '#000'}}>
                        <h3>Event Details</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block "
                            src={project.klash.comps.contact}
                            alt="First slide"
                            width='42%'
                            height='42%'
                        />
                        <Carousel.Caption style={{color: '#000'}}>
                        <h3>Contact</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    </Carousel>
               
            })}
            </Container>
        )
    
}
export default Klash;

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
        maxHeight: '50rem'
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
    }
    
}