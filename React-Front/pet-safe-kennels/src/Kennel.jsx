import React, { Component } from 'react' 
import LowProfile from './components/LowProfileKennels.jsx'
const info = "We Can Help!   No Matter Where You Live. A rescued pet should not be threatened by aggressive animals, wild or domestic. Nationwide Pet Lovers are increasingly at risk of losing our furry family members to Coyotes, Bobcats, Wolves, Hawks, Mountain Lions, Aggressive Dogs, & Snakes that may jeapordize your dogs, cats, and birds"
const post_info = "We are here to protect your pets, make them comfortable, and keep them happy. We have been called the Michelangelo of dog kennels. Call Us for a Free Estimate. It's our years of experience that makes us better than other dog kennels companies because with each kennel we research and develop new techniques, methods, and proprietary designs that other comapnies can not duplicate. We build and sell the Absolute STRONGEST Kennels You Can Find Anywhere!   Guaranteed!"



export default class Kennel extends Component{
    render(){
        return(<div className="Dog">
            <h1>Custom Built Kennels Designed To Keep Pets Safe!</h1> 
            <p>{info}</p>
            <p>{post_info}</p>  
            <LowProfile />
        </div>
        )
    }
}