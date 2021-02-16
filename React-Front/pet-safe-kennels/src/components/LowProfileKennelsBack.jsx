import React, { Component } from 'react' 
import KennelBtn from './KennelBtn.jsx'
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
            <p>Our low-profile model will keep your small pets safe.</p>
            <ul><li>Does not obstruct home views</li>
                <li>Lid opens from the top for Owners.</li>
                <li>Pet-door opens from the side for your pet.</li>
                <li>Can connect to your house via a doggy door.</li>  
                
                <li><KennelBtn myroute={this.myRouting}/></li>
            </ul> 
            
        </div>)
    }
}