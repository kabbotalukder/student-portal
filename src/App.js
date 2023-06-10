import React from 'react';
import {HashRouter as Router, Routes , Route } from 'react-router-dom';
import NavBar from './NavBar';
import Login from './Login';
import Home from './Home';
import Accordion from './Accordion';
import './App.css';

const App = () => {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Login />}></Route>
                <Route exact path="/home" element={<Home />}></Route>
                <Route exact path="/courses" element={<Accordion />}></Route>
            </Routes>
        </Router>
    );
}

export default App;