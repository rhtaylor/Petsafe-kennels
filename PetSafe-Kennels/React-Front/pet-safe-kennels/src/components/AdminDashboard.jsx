import React, { Component } from 'react'

export default class AdminDashboard extends Component{
    constructor(props){
    super(props) 
    this.state = {
        customers: []
    } 
    } 

    render(){ 
        debugger
        return(<div>
            <ul>
            {this.state.customers.map(person => <div><ol><li>{person.name}</li><li>{person.email}</li></ol></div>)} 
            </ul>
        </div>)
    } 

    componentDidMount() {
        fetch('http://localhost:3000/customers.json')
            .then(response => response.json())
            .then(data => { 
                debugger
                this.setState({
                    customers: data
                })
            })
    }
}