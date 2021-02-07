import React, { Component } from 'react'  

import kennel from './kennel.jpg'  
import Kennel from './Kennel.jsx' 
import home from './favicon.ico'; 
import happydog from './happy-dog.jpg'
import './home.css'   
import './home.scss' 
import LOGO from './LOGO.png' 
import PropTypes from 'prop-types' 
import Button from './Button.jsx'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';  
import ContactUs from './EmailForm.jsx'

const URL = 'http://localhost:3001/Kennel' 

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: "full name",
            email: 'email',
            phone_number: 'phone_number', 
            display: null, 
            direction: null
        } 
        this.updateForm = this.updateForm.bind(this) 
        this.popupFn = this.popupFn.bind(this)
    }
    
    componentDidMount(){
        debugger
    } 
    updateForm(e){
        e.preventDefault() 
        debugger 
        this.setState(
        { display: "flex", 
        direction: 'column'})
        
    } 
    
    mouseFinder(e){
        e.preventDefault()
        console.log(e.screenX, e.screenY) 
        if(e.screenX >= 170 && e.screenX <= 270 && e.screenY >= 225 && e.screenY <= 300){
            console.log("bow wow") 
            this.props.history.push('/Kennel')
        }
    }
    dog=(e)=>{
        console.log("DOGGO", e)
    
    } 
    popupFn(e){ 
        e.preventDefault()
        debugger

    }

    render(){
        return( 
            <div id="container"> 
          
            <header id="home"> 
                <Route path='/Kennel' component={Kennel} />
                 <img alt="home" src={happydog} />
                
            </header> 
            <footer>
                    <Button handleClick={(e) => this.updateForm(e)} /> 
                <ContactUs display={{display: this.state.display}} stateToProp={this.state.direction} history={this.props.history} 
                        popupFn={this.popupFn}
                />
                <h1>Call Us: 520-730-7020</h1>
            </footer>  
            </div>
        )
    }
}