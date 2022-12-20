import classes from './Review1.module.css';

const Review1 = (props) => {
    return (
        <div className={classes.main}>
            <span className={classes.avatar}></span>
            <span className={classes.stars}></span>
            <h1 className={classes.title}>Josh Dallas</h1>
            <h3 className={classes.text}>Incredible service, very knowledgeable as well as friendly and communicative.
                Glad to have made this connection and hope to work with agency in the long term.</h3>
        </div>
    );
}

export default Review1;