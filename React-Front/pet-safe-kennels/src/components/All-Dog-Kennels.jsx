import React, { Component } from 'react'  
import '../css/kennel-card-all.scss'

import DogKennel from './DogKennel.jsx'
import lowProfileDogkennel from '../pictures/lowProfileDogKennel.jpg'
import small from '../pictures/low-profile-small-dog.jpg'
import low from '../pictures/small-dog-kennels.jpg'
import WrapAroundKennel from '../pictures/WrapAroundKennel.jpg'
const DOGARRAY = [{ title: 'Klassic Kennel', info: 'Classic Small Dog Kennel', img: small, size: '6x3' }, { title: 'Wrap Around', info: 'Custom kennel to wrap to the contours of the house. Attached to the house with doggy-door.', img: WrapAroundKennel, size: '20x3' },{ title: 'Cool and low-down', info: 'Low profile and out of the way of your home, custom built to fit in house window nook', size: '7x2.5', img: low }, { title: 'perfection for the little ones', info: 'small dog kennel attached to house with doggy-door and dog-door', size: '3x5', img: lowProfileDogkennel }]
export default class AllDogKennelsPage extends Component{
   constructor(props){
    super(props) 
    this.make_kennels = this.make_kennels.bind(this)
   } 
   make_kennels(){
       return DOGARRAY.map((k,i) => <DogKennel kennel={k}/>)
   }
    render(){
        return(<div id="kennel_slide">
            {this.make_kennels()} 
        
        </div>)
    }
} 