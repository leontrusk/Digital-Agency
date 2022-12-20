import classes from './Review5.module.css';

const Review5 = (props) => {
    return (
        <div className={classes.main}>
            <span className={classes.avatar}></span>
            <span className={classes.stars}></span>
            <h1 className={classes.title}>Oleg Colton</h1>
            <h3 className={classes.text}>We thoroughly enjoyed our experience working with NIMRO!
                They helped us get outside of our comfort zone to create the kind of marketing we truly needed.
                We look forward to our future projects!</h3>
        </div>
    );
}

export default Review5;