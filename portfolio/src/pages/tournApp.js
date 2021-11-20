import React from 'react';
import {projects } from '../data/data';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import Container from 'react-bootstrap/Container'

const TournApp = () => {
   
   
    const navigate = useNavigate();
        
        return(
            <Container style={styles.container} >
            <button style={styles.button} onClick={() => navigate(-1)}>
                <BsChevronLeft style={{marginRight: '0.5rem'}} /> BACK
            </button>
                {projects.map((project, i)=>{
                    return<Carousel style={styles.slider} fade >
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.main}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Main</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.login}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Login</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.loginOne}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Login With Information</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.register}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Register</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.registerOne}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Registration With nformation</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.createTournament}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Create Tournament</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.tournamentOne}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>First Tournament Created</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.home}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#000'}}>
                        <h3>Home</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.edit}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Edit Tournament</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.homeEdited}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#000'}}>
                        <h3>Home Edited</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.createAnother}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Create Another Tournament</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.createAnotherOne}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Second Tournament Created</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.secondDeleted}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#000'}}>
                        <h3>Second Tournament Deleted</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.settings}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#fff'}}>
                        <h3>Settings</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={styles.item} >
                        <img
                            className="d-block"
                            src={project.tournApp.comps.updateProfile}
                            alt="First slide"
                            width='70%'
                            height='70%'
                        />
                        <Carousel.Caption style={{color: '#000'}}>
                        <h3>Updated Profile</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                    
                    </Carousel>
                    
                })}
            </Container>
      
        )
    
}
export default TournApp;

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