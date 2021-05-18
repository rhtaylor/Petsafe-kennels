import React, { Component } from 'react'

export default class Create_Form extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
    return(<div>
        <form className="form" handleSubmit={ event => this.props.handleSubmit(event)}>
            <label>First and Last Name</label>
            <input
            type="text"
            name="name"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.name}
            /> 
        <label>Number</label>
        <input
            type="text"
            name="number"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.number} />
         
        <label>email</label>
        <input
            type="text"
            name="email"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.email} /> 
        <label>City</label>
        <input
            type="text"
            name="city"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.city} /> 

        <input className="button" type="submit" value="create" />
        </form>  

    </div> )
    }
}