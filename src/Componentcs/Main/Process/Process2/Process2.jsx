import classes from './Process2.module.css';



const Process2 = (props) => {
    return (
        <div className={classes.process}>
            <span className={classes.processIcon}></span>
        <h1 className={classes.processTitle}>GOALS</h1>
        <h3 className={classes.processDescription}>Understanding the final result you expect allows us to pick an effective solution to get your business from point A to point Z. 
        For SEO, it can be "top 3 in the USA for keywords X and Y", for PPC — "ROI above X%", for design — "increase brand loyalty by X%" and so on.</h3>
    <h3 className={classes.number}>2</h3>
    </div>
    );
}


export default Process2;