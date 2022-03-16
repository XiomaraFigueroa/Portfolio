import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';


const Cards = props => {
    return(
        <CardGroup style={{height: '100%', width: '30rem', backgroundColor:'purple'}} >
            <Card id={props.id}style={props.style}>
            <Card.Img variant="top" src={props.image}  />
            <Card.Body style={{marginLeft: '1rem'}} >
                <Card.Title> {props.title} </Card.Title>
                <Card.Text style={{marginTop: '1rem',  fontFamily: 'Avenir Light, Helvetica, san-serif',whiteSpace: 'pre-wrap', maxHeight: '100%'}} >
                    {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{border: 'none', backgroundColor: '#fff', marginLeft: '1rem'}} >
                        <Link
                            href={props.href}
                            to={props.to}
                            style={{color: '#9b1d20',textDecoration:'none'}}
                        >
                           Gallery
                        </Link>   
            </Card.Footer>
            </Card>
        </CardGroup>
    )
}
export default Cards;
