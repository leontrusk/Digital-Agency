import classes from './Process9.module.css';



const Process9 = (props) => {
    return (
        <div className={classes.process}>
            <span className={classes.processIcon}></span>
            <h1 className={classes.processTitle}>REPORTING</h1>
            <h3 className={classes.processDescription}>We are business people; 
            we don't inflate reports with nonsense, as many competitors do, saying things like, 
            "On Monday we got out of the chairs, on Tuesday we painted flip-chart, and on Wednesday we inserted paper into the printer".
             We report only facts and numbers.</h3>
            <h3 className={classes.number}>8</h3>
        </div>
    );
}


export default Process9;