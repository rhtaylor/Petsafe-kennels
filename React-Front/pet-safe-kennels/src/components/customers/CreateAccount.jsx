import React, { Component } from 'react'
import Create_Form from '../forms/Create_Form'
export default class CreateAccount extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            number: '',
            city: '',  
            address: '',
            password: '', 
            pending: false

        } 
        this.handleChange = this.handleChange.bind(this) 
        this.handlesubmit = this.handlesubmit.bind(this)
    } 
    handlesubmit(e){  
        e.preventDefault();
        debugger
        let saved_e = e
        let name = saved_e.currentTarget.name.value
        let number = saved_e.currentTarget.number.value
        let email = saved_e.currentTarget.email.value
        let city = saved_e.currentTarget.city.value 
        let address = saved_e.currentTarget.address.value
        let password = saved_e.currentTarget.password.value
        let password_confirmation = saved_e.currentTarget.password_confirmation.value 
        debugger
        this.setState(pS=>{ 
            return { 
                pending: true,
                name: name, 
                number: number,
                email: email,
                city: city,
                address: address,  
                password: password,
                password_confirmation: password_confirmation,  
                 }
            } 
            )
        debugger
        fetch('http://localhost:3000/customers/new', {
            method: "POST",
            headers: {
                mode: 'no-cors',
                'Content-Type': "application/json", 
                'Access-Control-Allow-Origin': 'http://localhost:3001',
                'credentials': 'same-origin'
            },
            body: JSON.stringify(this.state)
        }).then(x=>{ 
            debugger 
         })
          
         this.setState(preS =>{
             return {...preS, 
                pending: false
            }
         })
    } 


    handleChange(e){
        e.preventDefault() && e.presist()
        let saved_e = e 
        
        let for_update = saved_e.currentTarget.name  
        let value = saved_e.currentTarget.value
        this.setState(pS=>{
            return {...pS, 
            [for_update] : value}
        })
    }
    render(){ 
        
        return (<div id="Customer"> 
            <div key={this.state.pending} className={ this.state.pending == false ? "False" : "True"}>Loading</div>
            <h1>Create Account</h1> 
            <Create_Form formData={this.state}  
            handleChange={this.handleChange} 
            handleSubmit={this.handlesubmit}
            />
            </div>)
    }
}