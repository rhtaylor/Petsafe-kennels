import React, { Component } from 'react'
import Create_Form from '../forms/Create_Form' 
import '../../css/customer.scss'
var GLOBAL_FLAG = 'null' 
var ERROR_MESSAGES= undefined 
var CREATE_CUSTOMER_URL = 'http://localhost:3000/customers/new' 

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
            pending: false, 
            GLOBAL_FLAG: 'null', 
            created: undefined,
            errors: []

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
        fetch(CREATE_CUSTOMER_URL, {
            method: "POST",
            headers: {
                mode: 'no-cors',
                'Content-Type': "application/json",
                'Access-Control-Allow-Origin': 'http://localhost:3001',
                'credentials': 'same-origin'
            },
            body: JSON.stringify(this.state)
        } )
        .then((response) => { (response.status.toString().match(/^2/) == null) ? GLOBAL_FLAG = 'error' : GLOBAL_FLAG = 'created'
            debugger    
        return response
        }) 
        .then( (x) =>{  
            debugger
            return x.json()
        //     return x.json() 
        //     (x.status.toString().match(/^2/) == null) ? GLOBAL_FLAG = 'error' : GLOBAL_FLAG = 'created'
        // return x.json()
        }).then(res=>{ this.setState((preS) =>{
            return {...preS, errors: res} 
        }) 
        }) 
        .then( (x)=>{ 
            debugger })
        .catch(function (error) {                      
                  
                GLOBAL_FLAG = 'error'
        }); 

          if (GLOBAL_FLAG == 'error'){ 
            
          } 
          else { 
           
          } 
        setTimeout(()=>{  
            return this.setState(preS => {
            return {
                ...preS,
                pending: false, 
                GLOBAL_FLAG: GLOBAL_FLAG
            }
        })}, 6000)
        
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
            <h1 key={this.state.GLOBAL_FLAG} className={this.state.GLOBAL_FLAG} id="error">Something went wrong</h1> 
            <p key={this.state.GLOBAL_FLAG + "."} className={this.state.GLOBAL_FLAG} id="error">please try again:)</p>
            <Create_Form formData={this.state}  
            handleChange={this.handleChange} 
            handleSubmit={this.handlesubmit}
            />
            </div>)
    } 

   

}