import classes from './Review3.module.css';

const Review3 = (props) => {
    return (
        <div className={classes.main}>
            <span className={classes.avatar}></span>
            <span className={classes.stars}></span>
            <h1 className={classes.title}>Brayan Fisher</h1>
            <h3 className={classes.text}>We are so pleased with the professionalism and talent that has been provided! Jeremy is easy to work with and knew what our goal was from the beginning.
                He did a fabulous job with the final outcome.</h3>
        </div>
    );
}

export default Review3;