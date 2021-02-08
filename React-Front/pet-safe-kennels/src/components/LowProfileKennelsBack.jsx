import React, { Component } from 'react' 

export default class LowProfileKennelsBack extends Component{
    constructor(props){
        super(props)
        this.myRouting = this.myRouting.bind(this) 
        this.state={
            display: 'none'
        }
    }
    
    componentDidUpdate(props){
        
    }
    
    myRouting(e){
        e.preventDefault()  
        this.props.push.push('SmallDogKennels') 
        
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
                <li><a id="link"
                onClick={e => this.myRouting(e)}
                >More about Small Dog Kennels</a></li>
            </ul> 
            
        </div>)
    }
}