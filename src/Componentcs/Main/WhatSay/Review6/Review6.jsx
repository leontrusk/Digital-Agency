import classes from './Review6.module.css';

const Review6 = (props) => {
    return (
        <div className={classes.main}>
            <span className={classes.avatar}></span>
            <span className={classes.stars}></span>
            <h1 className={classes.title}>Polly McDougall</h1>
            <h3 className={classes.text}>NIMROl consistently exceeds our expectations. 
            Not only are they extremely knowledgeable but you can't beat the passion that these folks have for the work they do. T
            hey will always be our first choice when it comes to our digital needs.</h3>
        </div>
    );
}

export default Review6;