import classes from './Process5.module.css';



const Process5 = (props) => {
    return (
        <div className={classes.process}>
            <span className={classes.processIcon}></span>
            <h1 className={classes.processTitle}>STRATEGY</h1>
            <h3 className={classes.processDescription}>After knowing everything about your competitors,
                it's time to create an action plan — the key to the result.
                At this stage, we confirm the sequence of all actions and their specificity between points A, B, C and so on.
                We provide you with a "road map", which our team will follow to help you achieve your goals.</h3>
            <h3 className={classes.number}>5</h3>
        </div>
    );
}


export default Process5;