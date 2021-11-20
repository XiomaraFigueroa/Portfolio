import React, { Component } from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import Klash from '../pages/klash';
import Covid from '../pages/covid';
import TournApp from '../pages/tournApp';

//React Router
import { Route, Routes } from 'react-router-dom';

class Routess extends Component{
    render(){
        return(
          
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Home' element={<Home />} />
                <Route exact path='/About' element={<About />} />
                <Route exact path='/Projects' element={<Projects />} />
                <Route exact path='/Contact' element={<Contact />} />
                <Route exact path='/Klash' element={<Klash />} />
                <Route exact path='/Covid' element={<Covid />} />
                <Route exact path='/TournApp' element={<TournApp />} />

            </Routes>
           
            
        )
    }
}
export default Routess;