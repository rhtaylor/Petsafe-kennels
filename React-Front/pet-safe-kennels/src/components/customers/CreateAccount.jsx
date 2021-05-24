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
            pending: false

        } 
        this.handleChange = this.handleChange.bind(this) 
        this.handlesubmit = this.handlesubmit.bind(this)
    } 
    handlesubmit(e){  
        e.preventDefault();
        debugger

        let saved_e = e 
        this.setState(pS=>{ 
            return {...pS,  
                pending: true 
            }} 
            )
        
        fetch('http://localhost:3000', {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                'Access-Control-Allow-Origin': '*', 
                'node': 'no-cors'
            },
            body: JSON.stringify(this.state)
        }).then(x=>{ 
            debugger 
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