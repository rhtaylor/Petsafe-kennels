import React, { Component } from 'react' 
import LowProfile from './components/LowProfileKennels.jsx'
import LowProfileBack from './components/LowProfileKennelsBack.jsx' 
import BigKennel from './components/BigKennel.jsx'
const info = "We Can Help!   No Matter Where You Live. A rescued pet should not be threatened by aggressive animals, wild or domestic. Nationwide Pet Lovers are increasingly at risk of losing our furry family members to Coyotes, Bobcats, Wolves, Hawks, Mountain Lions, Aggressive Dogs, & Snakes that may jeapordize your dogs, cats, and birds"
const post_info = "We are here to protect your pets, make them comfortable, and keep them happy. We have been called the Michelangelo of dog kennels. Call Us for a Free Estimate. It's our years of experience that makes us better than other dog kennels companies because with each kennel we research and develop new techniques, methods, and proprietary designs that other comapnies can not duplicate. We build and sell the Absolute STRONGEST Kennels You Can Find Anywhere!   Guaranteed!"



export default class Kennel extends Component{
    constructor(props){ 
        super(props); 
        this.state = {
            display: 'show', 
            front: 'show',
            back: 'none', 

        }
        
        this.flipKennel = this.flipKennel.bind(this)
    }
    flipKennel(e){
        e.preventDefault() 
    debugger 
    let {front, back} = this.state; 
    if (front == 'show'){ front = 'none'} else { front = 'show'} 
    if (back == 'none'){ back = 'show'} else { back = 'none' }  
    debugger   
    this.setState({front: front , back: back}) 
        
        
    }
    render(){
        return(<div className="Dog">
            <h1>Custom Built Kennels Designed To Keep Pets Safe!</h1> 
            <p>{info}</p>
            <p>{post_info}</p>  
            <div id="sub-kennel">
            <LowProfile show={this.state.front} clickMe={e=>this.flipKennel(e)} /> 
            <LowProfileBack push={this.props.history} show={this.state.back} clickMe={e => this.flipKennel(e)}/>
            <BigKennel /> 
            </div>
        </div>
        )
    }
}