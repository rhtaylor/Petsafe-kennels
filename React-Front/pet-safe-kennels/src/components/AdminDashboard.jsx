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
               {this.state.customers.map(person =>{ return (<div key={this.state.customers.customer}><ul><li>{person.customer.name}</li><li>{person.customer.number}</li></ul>
                     <ul>{ person.kennel.map((k)=> <li>{k.kennel_type}</li>) }</ul>
                   <br/>
                   </div>)})
                    
            }
            </ul> 
            </div>
            )
    
        }
    componentDidMount() {
        fetch('http://localhost:3000/admin.json')
            .then(response => response.json())
            .then(data => { 
                debugger
                this.setState({
                    customers: data
                })
            })
    }
}