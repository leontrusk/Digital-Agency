import classes from './Process.module.css';
import Process1 from './Process1/Process1';
import Process2 from './Process2/Process2';
import Process3 from './Process3/Process3';
import Process4 from './Process4/Process4';
import Process5 from './Process5/Process5';
import Process6 from './Process6/Process6';
import Process7 from './Process7/Process7';
import Process8 from './Process8/Process8';
import Process9 from './Process9/Process9';


const Process = (props) => {
    return (
        <div className={classes.main}>
            <img src="https://i.gifer.com/V0fR.gif" className={classes.gifbox}/>
            <h1 className={classes.title}>OUR PROCESS</h1>
            <Process1/>
            <Process2/>
            <Process3/>
            <Process4/>
            <Process5/>
            <Process6/>
            <Process7/>
            <Process8/>
            <Process9/>
        </div>
    )
}

export default Process;