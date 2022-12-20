import Review1 from './Review1/Review1';
import Review2 from './Review2/Review2';
import Review3 from './Review3/Review3';
import Review4 from './Review4/Review4';
import Review5 from './Review5/Review5';
import Review6 from './Review6/Review6';
import classes from './WhatSay.module.css';

const WhatSay = (props) => {
    return (
        <div className={classes.main}>
           <img src="https://i.gifer.com/V0fR.gif" className={classes.gifbox}/>
                <h1 className={classes.title}>What They Say</h1>
                <Review1/>
                <Review2/>
                <Review3/>
                <Review4/>
                <Review5/>
                <Review6/>
</div>
    );
}

export default WhatSay;