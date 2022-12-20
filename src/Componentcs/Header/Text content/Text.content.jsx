import classes from './Textcontent.module.css';
import { NavLink } from 'react-router-dom';

const Textcontent = (props) => {
    return (
        <div className={classes.main}>
            <img src="https://i.gifer.com/V0fR.gif" className={classes.gifbox}/>
            <div className={classes.text_content}>
               <span className={classes.title}>Digital Marketing and Web Design Agency </span>
                <h3 className={classes.discription}>We exist in the market to make strong performance for strong clients. Therefore, we cooperate only with those businesses managed by professionals</h3>
                <button className={classes.button1}><NavLink to={'/projects'} className={classes.buttonLink}>PROJECTS</NavLink></button>
                <button className={classes.button2}><NavLink to={'/contact'} className={classes.buttonLink}>CONTACT</NavLink></button> 
        </div>
        
        </div>
    );
}

export default Textcontent;