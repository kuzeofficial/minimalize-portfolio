import React, {useState, useEffect } from 'react'
import emailjs from 'emailjs-com';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Button} from "@material-ui/core";
import  Alert  from "@material-ui/lab/Alert";
import SendIcon from "@material-ui/icons/Send";
import Aos from "aos";
import "aos/dist/aos.css";
function hide(){
    document.getElementById('alerta').style.display = 'none';
    }
const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: "1rem",
      color: "#4070F4",
      borderColor: "#4070F4",
    },
  }));
const InputField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "#4070F4",
      },
      "& label": {
        color: "#0E2431",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#0E2431",
        },
        "&:hover fieldset": {
          borderColor: "#0E2431",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#0E2431",
        },
      },
    },
})(TextField);
  
export const Contact = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    });
    const classes = useStyles();

    const frmContact = { userEmail:'', userName:'', emailTitle:'', emailDetails:'' };
    const [contact,setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);
    const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
    e.preventDefault();
    		emailjs.send('default_service','template_portfolio', contact, 'user_qZigmbIXOBvY5baWxwy2K')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(frmContact);
				   setShowMessage(true);
		}, (err) => {
				   console.log('FAILED...', err);
		});
   }
    return (
      
      <section className="contact section" id="contact">
        { showMessage ? <Alert id="alerta" className="col-md-5 mx-auto" variant="filled" onClose={() => {hide()}}severity="success">Email Send Success!!</Alert> : ''}
        <h2 className="section-title">Contact</h2>
        <div className="contact__container bd-grid">
          <form className={classes.form} onSubmit={handleSubmit}>
            <InputField data-aos="fade-down" data-aos-delay="200"
            type="text" 
            fullWidth={true} 
            label="Email Address" 
            variant="outlined" 
            margin="dense" 
            size="medium" 
            value={contact.userEmail} 
            name="userEmail" 
            onChange={handleChange} 
            inputProps={{ style: { color: "black" } }}
            />
            <InputField data-aos="fade-down" data-aos-delay="400"
            type="text" 
            fullWidth={true} 
            label="Name" 
            variant="outlined" 
            margin="dense" 
            size="medium" 
            value={contact.userName} 
            name="userName" 
            onChange={handleChange} 
            inputProps={{ style: { color: "black" } }}
            />
            <InputField data-aos="fade-down" data-aos-delay="600"
            type="text" 
            fullWidth={true} 
            label="Title" 
            variant="outlined" 
            margin="dense" 
            size="medium" 
            value={contact.emailTitle} 
            name="emailTitle" 
            onChange={handleChange} 
            inputProps={{ style: { color: "black" } }}
            />
            <InputField data-aos="fade-down" data-aos-delay="800"
            type="textarea" 
            fullWidth={true} 
            label="Proposal" 
            variant="outlined" 
            margin="dense" 
            size="medium" 
            value={contact.emailDetails} 
            name="emailDetails" 
            onChange={handleChange} 
            inputProps={{ style: { color: "black" } }}
            />
            <br />
            <Button
            type="submit"
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            >
            contact me
            </Button>
          </form>
        </div>
      </section>
    )
}

export default Contact
