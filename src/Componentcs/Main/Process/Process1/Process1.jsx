import classes from './Process1.module.css';



const Process1 = (props) => {
    return (
            <div className={classes.process}>
                <span className={classes.processIcon}></span>
                <h1 className={classes.processTitle}>QUESTIONNAIRE</h1>
                <h3 className={classes.processDescription}>Completing a questionnaire (brief) is a crucial step in client proposal preparation. 
                In advertising, the "brief" is a file that contains detailed information about the client, 
                target audience, goals and objectives of the upcoming advertising campaign, desired KPIs (key performance indicators), etc.</h3>
            <h3 className={classes.number}>1</h3>
            </div>
    );
}


export default Process1;