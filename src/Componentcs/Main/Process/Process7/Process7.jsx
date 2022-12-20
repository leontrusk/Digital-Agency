import classes from './Process7.module.css';



const Process7 = (props) => {
    return (
        <div className={classes.process}>
            <span className={classes.processIcon}></span>
            <h1 className={classes.processTitle}>DELIVERY</h1>
            <h3 className={classes.processDescription}>We deliver all services to customers on time and always meet the KPIs.
             We are able to do so because of our process: filling out the questionnaire, asking you to set clear goals, 
             correctly estimating the time and budget, conducting a market analysis, developing a strategy, and adhering to it.</h3>
            <h3 className={classes.number}>7</h3>
        </div>
    );
}


export default Process7;