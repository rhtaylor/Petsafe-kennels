import React, { Component } from 'react' 
import DogKennel from './DogKennel.jsx'
import lowProfileDogkennel from '../pictures/lowProfileDogKennel.jpg'
import WrapAroundKennel from '../pictures/WrapAroundKennel.jpg'
const smallDogKennelArray = [{title: 'Wrap Around', info: 'Custom kennel to wrap to the contours of the house. Attached to the house with doggy-door.',img:  WrapAroundKennel, size: '20x3'}, 
    {title: 'perfection for the little ones', info: 'small dog kennel attached to house with doggy-door and dog-door' , size: '3x5', img: lowProfileDogkennel}]
export default class SmallDogKennels extends Component{
    constructor(props){
        super(props) 
        this.backUp = this.backUp.bind(this)
    }
    componentDidMount(){
        debugger
    } 
    backUp(e){
        e.preventDefault() 
         
        this.props.history.goBack(-1)
    }
    
    render(){
        return( <div id="small-dog-kennels-page">
            <a><h1 id="back" 
            onClick={e=>this.backUp(e)}
            >{'<~Back'}</h1></a>
            <p>Small, durable, attractive</p>  
            <p>Low profile and out of the way of your home </p> 
            <p>Does not obstruct window view, and out of the HOA view too</p>
            <p>Choose your style of custom fabricated lifting lids and dog doors</p>
            <DogKennel delay={3000} info={smallDogKennelArray} />
        </div>

        )
    }
}