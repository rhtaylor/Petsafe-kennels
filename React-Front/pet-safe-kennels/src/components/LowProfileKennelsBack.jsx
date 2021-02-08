import React, { Component } from 'react' 

export default class LowProfileKennelsBack extends Component{
    constructor(props){
        super(props) 
        this.state={
            display: 'none'
        }
    }
    
    componentDidUpdate(props){
        
    }
    
    render(){
        return(<div id="small-dog-kennel-back" style={{display : this.props.show}} 
        key={this.props.show} 
        onClick={e => this.props.clickMe(e)}
        >
            <p>Our low profile model will keep your small pets safe.</p>
            <ul>
                <li>Lid opens from the top for Owners.</li>
                <li>Pet-door opens from the side.</li>
                <li>Can connect to house via doggy door.</li>
                </ul>
        </div>)
    }
}