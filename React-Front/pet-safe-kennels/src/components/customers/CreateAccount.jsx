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
    }

    render(){
        return (<div>
            <h1>Create Account</h1> 
            <Create_Form formData={this.state} />
            </div>)
    }
}