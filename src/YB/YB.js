import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import '../App.css';
import NoBrandBurger from './NoBrandBurger.json';
import YBNavi from './YBNavi';


function YB() {
  return (
    <>

      <div style={{ backgroundColor: '#FABE00' }}>
        <YBNavi />



        <div className="img2">
          <img src='https://www.shinsegaefood.com/brand/nobrandburger/images/background/bg_brand_main.png'></img>
        </div>
      </div>
    </>
  )
}

export default YB;