import React from 'react';
import classes from './Subscribe.module.css';
import { NavLink } from 'react-router-dom';

const Subscribe = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.imageboxes}>
                <div className={classes.imagebox1}></div>
                <div className={classes.imagebox2}></div>
            </div>
            <img src="https://i.gifer.com/V0fR.gif" className={classes.gifbox}/>
            <h1 className={classes.title}>Get latest updates and deals</h1>
            <form className={classes.subscribe}>
            <input className={classes.formaEmail} name='email' type='text' placeholder='Enter your email' autocomplete='off'/>
            <button className={classes.button}><NavLink to={''} className={classes.buttonText}>SUBSCRIBE</NavLink></button></form>
        </div>
    );
}

export default Subscribe;