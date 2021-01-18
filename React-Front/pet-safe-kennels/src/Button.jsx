import React, { Component } from 'react' 
import './css/button.scss'
export default class Button extends Component{
    constructor(props){
        super(props); 
        this.state={
            display: "flex"
        }
    } 
    
    render(){
        return(<div>
            <button style={{ display: this.state.display }} onClick={this.props.handleClick}>Get Free Quote</button> 

        </div>)
    }
}