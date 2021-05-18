import React, { Component } from 'react'
import Create_Form from '../forms/Create_Form'
export default class CreateAccount extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            number: '',
            city: ''

        } 
        this.handleChange = this.handleChange.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this)
    } 
    handleSubmit(e){
        e.preventDefault() && e.presist()
        let saved_e = e
        debugger
    }

    handleChange(e){
        e.preventDefault() && e.presist()
        let saved_e = e 
        debugger 
        let for_update = saved_e.currentTarget.name  
        let value = saved_e.currentTarget.value
        this.setState(pS=>{
            return {...pS, 
            [for_update] : value}
        })
    }
    render(){
        return (<div>
            <h1>Create Account</h1> 
            <Create_Form formData={this.state}  
            handleChange={this.handleChange}
            />
            </div>)
    }
}