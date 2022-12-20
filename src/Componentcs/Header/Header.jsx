import React from 'react';
import classes from './Header.module.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Textcontent from './Text content/Text.content';
import Imagebox from './ImageBox/Imagebox';
import Navbar from './NavBar/Navbar';

const Header = (props) => {
    return (
        <div className={classes.main}>
<Navbar/>
<Textcontent/>
<Imagebox/>
</div>
    );
}

export default Header;