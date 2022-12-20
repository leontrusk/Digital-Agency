import classes from './Process3.module.css';



const Process3 = (props) => {
    return (
        <div className={classes.process}>
            <span className={classes.processIcon}></span>
            <h1 className={classes.processTitle}>ESTIMATION</h1>
            <h3 className={classes.processDescription}>After we have figured out the details of your business and you have set your goals, we can evaluate the necessary efforts to achieve the result.
                We can't produce niche research in one day, a top 3 Google US in one week or a website design in three days — offers like these are nothing but fraud.</h3>
            <h3 className={classes.number}>3</h3>
        </div>
    );
}


export default Process3;