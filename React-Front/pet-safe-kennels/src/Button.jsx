import React, { Component } from 'react' 
import './css/button.scss'
export default class Button extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div>
            <button onClick={e=>this.props.updateForm(e)}>Get Free Quote</button>
        </div>)
    }
}