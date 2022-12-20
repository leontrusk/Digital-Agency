import React from 'react';
import classes from './Navbar.module.css';
import {BrowserRouter, NavLink, Routes} from 'react-router-dom';


const Navbar = (props) => {
    return (
<div className={classes.navbar}>
<div className={classes.logo}>NIMRO</div>
<nav className={classes.navmenu}>
    <NavLink to={'/about'} className={classes.navLink}>About</NavLink>
    <NavLink to={'/projects'} className={classes.navLink}>Projects</NavLink>
        <NavLink to={'/services'} className={classes.navLink}>Services</NavLink>
        <NavLink to={'/contact'} className={classes.navLink}>Contact</NavLink>
        </nav>
<button className={classes.button}><NavLink to={'/pvprank'} className={classes.buttonText}>GET STARTED</NavLink></button>
</div>
    );
}



export default Navbar;