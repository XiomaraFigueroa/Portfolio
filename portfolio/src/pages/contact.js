import React, { useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdEmail }from 'react-icons/md';
import { FaLinkedin, FaPhoneSquareAlt } from 'react-icons/fa';

const Contact = () => {
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
        
            setValidated(true);
        };
  
  
        return (
            
            
            <Container id='contact' style={styles.container}>
               <Row style={styles.row} > 
                <h1 style={styles.contact} >CONTACT</h1>
                   <Col  md={12} lg={4} >
        
                   <Form noValidate validated={validated} onSubmit={handleSubmit} style={styles.contactForm} >
                                        
                                        <Form.Group style={styles.formGroup} controlId="validationCustom03">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" style={styles.formControl}  required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a name.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group style={styles.formGroup} controlId="validationCustom04">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" style={styles.formControl} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide an email.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group style={styles.formGroup} controlId="validationCustom05">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" style={{ height: '250px', borderRadius: '0px', border:'3px solid #EEEEEE' }} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a message.
                                        </Form.Control.Feedback>
                                        </Form.Group>
                                    
                                        <Button variant="primary" type="submit" style={styles.button}>Submit</Button>
                        </Form>



                   </Col>
                   <Col md={12} lg={6} >
                   
                        <Card style={styles.card}  >
                            <Card.Body style={{maxWidth:'35rem',padding: '3rem'}}>
                                <Card.Title style={styles.cardTitle} >Quick Contact </Card.Title>
                                <Card.Text style={styles.cardTextOne} >
                                    If you have any questions or you just want to say hello, 
                                    simply use the following contact details.
                                </Card.Text>
                                <Card.Text style={styles.cardText}>
                                    <MdEmail style={{marginRight: '0.5rem', width: '30px', height: '30px'}} />
                                    <a href='mailto:.x.figueroa@outlook.com' style={{textDecoration: 'none', color: '#000'}}>
                                        x.figueroa@outlook.com
                                    </a>
                                </Card.Text>
                                <Card.Text style={styles.cardText}>
                                    <FaPhoneSquareAlt style={{marginRight: '0.5rem', width: '30px', height: '30px'}} />  787-214-1049 
                                </Card.Text>
                                <Card.Text style={styles.cardText}>
                                    <FaLinkedin style={{marginRight: '0.5rem', width: '30px', height: '30px'}} />
                                    <a href='https://www.linkedin.com/in/xiomara-figueroa-081a01134/' style={{textDecoration: 'none', color: '#000'}}> 
                                        https://www.linkedin.com/in/xiomara-figueroa-081a01134/
                                    </a>
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>
                  
                   </Col>

               </Row>
          
            </Container>

        )


    
}
            
export default Contact;

const styles ={
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-evenly',
        minHeight: '100vh',
        maxWidth: '90%'
    },
    row: {
        display: 'flex',
        justifyContent:'space-between',
    },
    contact: {
        fontSize: '6.3rem',
        fontFamily: 'Avenir Heavy, helvetica, san-serif',
        color: '#eeeeee',
        marginBottom: '3rem'

    },
    contactForm: {
        textAlign: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: 'Avenir Heavy, helvetica, san-serif',
        border: '1px solid #eeeeee',
        borderRadius: '5px',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2)',
        
       
    },
    formGroup: {
        textAlign: 'left'
    },
    formControl: {
        borderRadius: '0px',
        border:'3px solid #eeeeee'
    },
    
    button: {
        backgroundColor:'#9b1d20' ,
        color: '#fff',
        width: '13rem',
        height: '2rem',
        border: 'none',
        borderRadius: '5px',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.2)',
        marginTop: '2rem',
        fontFamily: 'Avenir Roman, helvetica, san-serif',

    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        marginTop: '1rem', 
        border: 'none',
        maxWidth:'35rem',
        backgroundColor: 'transparent'
    },
    cardTitle: {
        fontFamily: 'Avenir Heavy, helvetica, san-serif',
        fontSize: '2.4rem',
        textAlign: 'center',
    },
    cardTextOne: {
        fontFamily: 'Avenir Light, helvetica, san-serif',
        fontSize: '1.25rem',
        textAlign: 'left',
        marginBottom: '2rem'
    },
    cardText: {
        fontFamily: 'Avenir Light, helvetica, san-serif',
        textAlign: 'left'
    }
    
}
