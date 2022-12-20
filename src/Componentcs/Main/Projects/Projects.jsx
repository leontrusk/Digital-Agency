import classes from './Projects.module.css';
import Cases from './Cases/Cases';

const Projects = (props) => {
    return (
        <div className={classes.main}>
            <img src="https://i.gifer.com/V0fR.gif" className={classes.gifbox}/>
            <h1 className={classes.title}>LATEST CASES</h1>
            <Cases/>
        </div>
    );
}

export default Projects;