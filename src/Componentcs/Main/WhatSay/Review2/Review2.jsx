import classes from './Review2.module.css';

const Review2 = (props) => {
    return (
        <div className={classes.main}>
            <span className={classes.avatar}></span>
            <span className={classes.stars}></span>
            <h1 className={classes.title}>Dakota Jayne</h1>
            <h3 className={classes.text}>Highly recommended and very professional.
                Amazing level of support. Built both my websites.</h3>
        </div>
    );
}

export default Review2;