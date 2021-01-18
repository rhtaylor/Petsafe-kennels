import React, { Component } from 'react';
import emailjs from 'emailjs-com';

 import './css/ContactUs.scss';

export default class ContactUs extends Component{
    constructor(props){
        super(props)  
        this.state={
            display: "none"
        }
        
    }
    componentDidMount(){
        debugger
    } 
    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.display !== this.props.display) {
            this.setState({ display: this.props.display.display });
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
        <form className="contact-form" style={{"display": this.state.display}} onSubmit={this.sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
} 
}