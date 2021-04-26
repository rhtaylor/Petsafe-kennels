import React, { Component } from 'react'  
import '../css/kennel-card-low.scss'
import DogKennel from './DogKennel.jsx' 
import DogKennelBackSmall from './DogKennelBacksmall.jsx'
import hardtop_arizona_kennel from '../pictures/Flat-Top-Kennel.jpg'
import scottsdale_kennel from '../pictures/scottsdale_low_kennel.jpg'
import kennel_with_tunnel_az from '../pictures/Side-Yard-Tunnel.jpg'
import phoenix_window_kennel from '../pictures/under_window.jpg'
import elongated_kennel_az from '../pictures/under_window_3.jpg' 
import mid_size_kennel from '../pictures/Phoenix-AZ-Kennels-For-Sale.jpg' 
import best from '../pictures/Best-Kennels-Available.jpg'
import wood_top_kennel from '../pictures/custom_roof.jpg' 
const DOGARRAY = [{ title: '1', info: 'Classic Small Dog Kennel', img: mid_size_kennel, size: '6x3' }, { title: '2', info: 'Custom kennel to wrap to the contours of the house.', img: elongated_kennel_az, size: '20x3' }, { title: '3', info: 'Low profile and coustom built to fit in house window nook', size: '7x2.5', img: phoenix_window_kennel }, { title: '4', info: 'small dog kennel attached to house with doggy-door and dog-door', size: '3x5', img: kennel_with_tunnel_az }]
const SMALL_DOG_KENNELS = [{ title: '1', info: 'Classic Small Dog Kennel', img: wood_top_kennel, size: '6x3' }, 
    { title: '2', info: 'Custom kennel to wrap to the contours of the house.', img: best, size: '20x3' }, { title: '3', info: 'Low profile and coustom built to fit in house window nook', size: '7x2.5', img: scottsdale_kennel }, { title: '4', info: 'small dog kennel attached to house with doggy-door and dog-door', size: '3x5', img: hardtop_arizona_kennel }]
const info = "It’s our years of experience that sets us apart from other Arizona outdoor pet enclosure companies. Our extensive research and development has developed Exclusive Proprietary Designs to Guarantee your pets safety! We take Pride in our Commitment to The Very Best Quality Dog Kennels, Great Service, and Client Satisfaction. Much of our work is from referrals and word of mouth."
export default class LowProfilePhoenixKennel extends Component{
    constructor(props){
        super(props) 
        this.make_kennels = this.make_kennels.bind(this)
        this.custom_class = {
            0: { i: { display: 'myKennels', back: 'none' } }, 1: { i: { display: 'myKennels', back: 'none' } }, 2: { i: { display: 'myKennels', back: 'none' } }, 3: { i: { display: 'myKennels', back: 'none' } }
        } 
        this.state= {} 
        this.flipKennel = this.flipKennel.bind(this)
    }  
 
    static getDerivedStateFromProps(props, state) {
        let new_array = DOGARRAY.map((k, i) => {
            return { id: i, i: { display: 'myKennels', back: 'none' } }
        })
        debugger
        return new_array

    }
    make_kennels(array) {
        return array.map((k, i) => <span id={i} key={i}><DogKennel my_state={this.state} id={i} kennel={k}
            clickMe={e => this.flipKennel(e)}
            custom_class={this.custom_class}
        /><DogKennelBackSmall display={this.state} id={i} image={k.img} custom_class={this.custom_class}
            clickMe={e => this.flipKennel(e)}
            kennel={k} /></span>)
    } 
    flipKennel(e){
       
            let savedE = e
            let savedTarget = e.currentTarget
            let currentI = savedTarget.id
            e.persist()

            debugger
            if (this.custom_class[currentI].i.display == 'myKennels') {
                this.custom_class[savedTarget.id].i = { display: 'none', back: 'kennel_back' }
            } else {
                this.custom_class[savedTarget.id].i = { display: 'myKennels', back: 'none' }
            }
            debugger
            this.setState((preS) => {
                return {
                    [savedTarget.id]: {
                        id: savedTarget.id,
                        i: this.custom_class[savedTarget.id].i
                    }
                }
            })
        }
    
    render(){
        return (<>
            <p>{info}</p>
            <div id="kennel_slide">
            {this.make_kennels(SMALL_DOG_KENNELS)}
            </div> 
            <div id="kennel_slide">
            {this.make_kennels(DOGARRAY)}
           </div>
           </> 
        )
    }
} 