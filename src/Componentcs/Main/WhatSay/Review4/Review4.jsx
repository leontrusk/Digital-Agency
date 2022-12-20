import classes from './Review4.module.css';

const Review4 = (props) => {
    return (
        <div className={classes.main}>
            <span className={classes.avatar}></span>
            <span className={classes.stars}></span>
            <h1 className={classes.title}>Nina Williyams</h1>
            <h3 className={classes.text}>These guys are incredibly talented and reliable.
                They always go above and beyond for us.
                Their work is fantastic and they make a great team together. Highly recommend!</h3>
        </div>
    );
}

export default Review4;