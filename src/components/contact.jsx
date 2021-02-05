import React, {useState, useEffect } from 'react'
import emailjs from 'emailjs-com';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Button} from "@material-ui/core";
import  Alert  from "@material-ui/lab/Alert";
import SendIcon from "@material-ui/icons/Send";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/styles.css"
function hide(){
    document.getElementById('alerta').style.display = 'none';
}
  
export const Contact = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    });

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
        <div class="contact__container bd-grid">
          <form action="" class="contact__form">
            <input placeholder="Email Address" data-aos="fade-down" data-aos-delay="200" label="Email Address" type="mail" value={contact.userEmail} name="userEmail" onChange={handleChange} class="contact__input"></input>
            <input placeholder="Name" data-aos="fade-down" data-aos-delay="400" label="Name" value={contact.userName} name="userName" onChange={handleChange}  type="text"  class="contact__input"></input>
            <textarea placeholder="Describe your proposal" data-aos="fade-down" data-aos-delay="600" name="emailDetails" value={contact.emailDetails} onChange={handleChange} cols="0" rows="10" class="contact__input"></textarea>
            <br />
            <input type="submit" value="Send" class="contact__button button"/>
          </form>
        </div>
      </section>
    )
}

export default Contact
