import React from 'react';
import classes from './About.module.css';
import { NavLink } from 'react-router-dom';

const About = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.imagebox}>
                <span className={classes.image1}></span>
                <span className={classes.image2}><h3 className={classes.textbox}>20+years of experience</h3></span>
            </div>
            <div className={classes.content}>
            <img src="https://i.gifer.com/V0fR.gif" className={classes.gifbox}/>
                <h1 className={classes.title}>Who we are</h1>
                <h3 className={classes.description}>NIMRO is an international digital agency that was 
                launched in 2015 as a result of the M&A deal between agencies OsloSEO and TrustCorp, 
                we have local teams in the USA, UK, Spain, Australia, Hungary, Saudi Arabia and Canada. 
                We empower brands with PR and Marketing strategies that demands action, attention and most importanly...</h3>
            </div>
            <button className={classes.button}><NavLink to={'/pvprank'} className={classes.buttonText}>FIND OUT MORE</NavLink></button>
        </div>
    );
}

export default About;