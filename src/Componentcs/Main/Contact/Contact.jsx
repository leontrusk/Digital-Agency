import classes from './Contact.module.css';
import { NavLink } from 'react-router-dom';


const Contact = (props) => {
    return (
        <div className={classes.main}>
            <img src="https://i.gifer.com/V0fR.gif" className={classes.gifbox}/>
                <h1 className={classes.title}>Feel free to contact us to learn more</h1>
                <span className={classes.tel}></span>
                <h3 className={classes.textTel}>+34 600 000 001</h3>
                <span className={classes.email}></span>
                <h3 className={classes.textEmail}>nimro@gmail.com</h3>
                <div className={classes.map}></div>
                <form className={classes.forma}>
                    <label className={classes.labelName}>Name</label>'
                    <input className={classes.formaName} name='name' type='text' autocomplete='off'/>
                    <label className={classes.labelTel}>Telephone</label>
                    <input className={classes.formaNumber} name='number' type='text' autocomplete='off'/>
                    <label className={classes.labelEmail}>Email</label>
                    <input className={classes.formaEmail} name='email' type='text' autocomplete='off'/>
                    <label className={classes.labelSubject}>Subject</label>
                    <input className={classes.formaSubject} name='subjects' type='text' autocomplete='off'/>
                    <label className={classes.labelMessage}>Message</label>
                    <input className={classes.formaMessage} name='message' type='text' autocomplete='off'/>
                    <button className={classes.button}><NavLink to={'/pvprank'} className={classes.buttonText}>SEND</NavLink></button>
                </form>
</div>
    );
}

export default Contact;