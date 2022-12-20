import React from 'react';
import classes from './Services.module.css';
import { NavLink } from 'react-router-dom';

const Services = (props) => {
    return (
        <div className={classes.main}>
            <div className={classes.content}>
            <img src="https://i.gifer.com/V0fR.gif" className={classes.gifbox}/>
                <h1 className={classes.title}>Services we offer</h1>
                <h3 className={classes.description}>We exist in the market to make strong performance for strong clients. 
                Therefore, we cooperate only with those businesses managed by professionals</h3>
            </div>
            <button className={classes.button}><NavLink to={'/pvprank'} className={classes.buttonText}>ALL SERVICES</NavLink></button>
        
        <div className={classes.serviceBox1}>
            <span className={classes.icon1}></span>
            <h1 className={classes.boxTitle1}>WEB Design</h1>
            <h3 className={classes.boxText1}>We work with designers who are members of the Awwwards jury. 
            A well thought out professional website design helps to improve the user journey, 
            makes the functionality easier to use, helps to keep the user’s attention, 
            creates a brand image, and allows the buyer to remember your brand better.</h3>
        </div>
        <div className={classes.serviceBox2}>
            <span className={classes.icon2}></span>
            <h1 className={classes.boxTitle2}>SEO Optimization</h1>
            <h3 className={classes.boxText2}>This is the main service of our agency, 
            and we believe that search engine optimization is the core of all digital marketing. 
            We have been engaged in SEO for over 13 years and have accumulated extensive experience in solving the most complex tasks: 
            from promoting local stores to multinational corporations.</h3>
        </div>
        <div className={classes.serviceBox3}>
            <span className={classes.icon3}></span>
            <h1 className={classes.boxTitle3}>Development</h1>
            <h3 className={classes.boxText3}>It's time to say goodbye to bad design and limited functionality. 
            We create optimized, fast and industry-leading websites and apps. 
            The web development team of our agency can turn any of your ideas into a cool innovative digital product.</h3>
        </div>
        <div className={classes.serviceBox4}>
            <span className={classes.icon4}></span>
            <h1 className={classes.boxTitle4}>SMM</h1>
            <h3 className={classes.boxText4}>Increase your brand awareness. Create the desired image and increase sales.
             All this is possible thanks to competent work with social networks. 
             Social media marketing (SMM) includes the development of a strategy, rubricator, creation of a unique design and communication policy.</h3>
        </div>
        </div>
    );
}

export default Services;