import React, { Component } from 'react';
import emailjs from 'emailjs-com';

 import './css/ContactUs.scss';

export default class ContactUs extends Component{
    constructor(props){
        super(props)  
        this.state={
            display: "none", 
            position: "none"
        }
        
    }
    componentDidMount(){
        debugger
    } 
    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.display !== this.props.display) {
            this.setState({ display: this.props.display.display,  
                            position: this.props.stateToProp });
        }
    }
     sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_4dlh4gj', 'template_ttirotc', e.target, 'user_fr2MGNwexUI3nLUlHjFKp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    render(){
    return (
        <form className="contact-form" style={{"display": this.state.display, "flex-direction": this.state.direction}} onSubmit={this.sendEmail}>
            <label style={{ "color": "red" }}>Phone Number</label>
            <input id="phone_number" type="phone" name="contact_number" />
            <label>Name</label>
            <input id="name" type="text" name="user_name" />
            
            <label>Email</label>
            <input id="email" type="email" name="user_email" />
            <label>Message</label>
            <textarea id="message" name="message" />
            <br/>
            <input type="image" id="submit"  type="submit" value="Send" />  
            

        </form>
    );
} 
}