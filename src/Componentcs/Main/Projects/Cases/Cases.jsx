import Case1 from './Case1/Case1';
import Case2 from './Case2/Case2';
import Case3 from './Case3/Case3';
import Case4 from './Case4/Case4';
import Case5 from './Case5/Case5';
import Case6 from './Case6/Case6';
import classes from './Cases.module.css';

const Cases = (props) => {
    return (
        <div className={classes.cases}>
        <Case1/>
        <Case2/>
        <Case3/>
        <Case4/>
        <Case5/>
        <Case6/>
        </div>
    );
}

export default Cases;