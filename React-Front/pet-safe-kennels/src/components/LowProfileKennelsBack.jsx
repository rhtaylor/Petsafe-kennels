import React, { Component } from 'react' 

export default class LowProfileKennelsBack extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        debugger
    }
    render(){
        return(<div className="Puppy" style={{display : this.props.show}}>
            <p>YO</p>
        </div>)
    }
}