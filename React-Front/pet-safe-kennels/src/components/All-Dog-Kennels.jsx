import React, { Component } from 'react'  
import '../css/kennel-card-all.scss'
import DogKennelBack from './DogKennelBack.jsx'
import DogKennel from './DogKennel.jsx'
import lowProfileDogkennel from '../pictures/lowProfileDogKennel.jpg'
import small from '../pictures/low-profile-small-dog.jpg'
import low from '../pictures/small-dog-kennels.jpg'
import WrapAroundKennel from '../pictures/WrapAroundKennel.jpg'
const DOGARRAY = [{ title: 'Klassic Kennel', info: 'Classic Small Dog Kennel', img: small, size: '6x3' }, { title: 'Wrap Around', info: 'Custom kennel to wrap to the contours of the house. Attached to the house with doggy-door.', img: WrapAroundKennel, size: '20x3' },{ title: 'Cool and low-down', info: 'Low profile and out of the way of your home, custom built to fit in house window nook', size: '7x2.5', img: low }, { title: 'Perfection', info: 'small dog kennel attached to house with doggy-door and dog-door', size: '3x5', img: lowProfileDogkennel }]
export default class AllDogKennelsPage extends Component{
   constructor(props){
    super(props)
       this.state = {
           display: 'myKennels',
           front: 'show',
           back: 'none', 
           backCard: 'kennel_back',
           id: 0, 
     
           } 
    
    this.make_kennels = this.make_kennels.bind(this) 
    this.flipKennel = this.flipKennel.bind(this) 
       this.custom_class = {
           0: { i: { display: 'myKennels', back: 'none' } }, 1: { i: { display: 'myKennels', back: 'none' } }, 2: { i: { display: 'myKennels', back: 'none' } }, 3: { i: { display: 'myKennels', back: 'none'}}
       }
    }
    static getDerivedStateFromProps(props, state) { 
    let new_array= DOGARRAY.map((k,i)=>{ 
        return { id: i, i: { display: 'myKennels', back: 'none'} }
    }) 
    debugger
    return new_array 
        
    }
    componentDidMount(){
        this.custom_class = this.state 
        debugger
    }
   flipKennel(e){
    let savedE = e 
    let savedTarget = e.currentTarget
    e.persist()  
      
    this.custom_class[savedTarget.id].i = {display: 'none', back: 'show'}

    this.setState((preS)=>{ 
        return { [savedTarget.id]:{ 
        id:  savedTarget.id,   
        i: { 'display': 'none', 'back': 'show'} 
    } 

}}

)
    
debugger    
   } 
   make_kennels(){  
       return DOGARRAY.map((k,i) => <span id={i} key={i}><DogKennel my_state={this.state} id={i} kennel={k} 
           clickMe={e => this.flipKennel(e)} 
           custom_class={this.custom_class}
       /><DogKennelBack display={this.state} id={i} custom_class={this.custom_class} kennel={k}/></span>)
   }
    render(){
        return(<div id="kennel_slide">
            {this.make_kennels()} 
        
        </div>)
    }
} 