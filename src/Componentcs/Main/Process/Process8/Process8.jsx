import classes from './Process8.module.css';



const Process8 = (props) => {
    return (
        <div className={classes.process}>
            <span className={classes.processIcon}></span>
            <h1 className={classes.processTitle}>FINAL EDITS</h1>
            <h3 className={classes.processDescription}>We are perfectionists. 
            We believe that no matter how hard we try, the result could always be better.
            If the ideas are realistic, we will implement those ideas
             (still this doesn't always happen, since it is unlikely that NASA will approve your banner on the Mars rover even though it is certainly a cool idea).</h3>
            <h3 className={classes.number}>8</h3>
        </div>
    );
}


export default Process8;