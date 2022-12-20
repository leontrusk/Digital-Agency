import React from 'react';
import classes from './Imagebox.module.css';

const Imagebox = (props) => {
    return (
<div className={classes.images_boxes}>
    <span className={classes.image_box1}></span>
    <span className={classes.image_box2}></span>
    <img src="https://i.gifer.com/V0fR.gif" className={classes.gifbox}/>
    <span className={classes.image_box3}></span>
    <span className={classes.image_box4}></span>
</div>
    );
}

export default Imagebox;