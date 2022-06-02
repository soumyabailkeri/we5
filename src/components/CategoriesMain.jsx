import React from 'react';
import { Button } from 'bootstrap';
import { NavLink } from 'react-router-dom';
import Products from './Products';
import Navbar from './Navbar';
import Footer from './Footer';



import {Routes ,Route} from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';


const CategoriesMain = () => {
    return (
        <div>
  {/* <Navbar/> */}

            <Products/>
  {/* <Footer/> */}

        </div>
    );
}

export default CategoriesMain;
