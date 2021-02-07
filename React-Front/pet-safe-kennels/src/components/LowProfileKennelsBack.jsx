import React, { Component } from 'react' 

export default class LowProfileKennelsBack extends Component{
    constructor(props){
        super(props)
    }
    componentDidUpdate(){
        debugger
    }
    
    render(){
        return(<div className="Puppy" style={{display : this.props.show}} 
        key={this.props.show}
        >
            <p>YO</p>
        </div>)
    }
}