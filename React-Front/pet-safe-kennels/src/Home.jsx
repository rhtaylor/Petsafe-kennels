import React, { Component } from 'react' 
import kennel from './kennel.jpg' 
import './home.css' 
const info = "We Can Help!   No Matter Where You Live. A rescued pet should not be threatened by aggressive animals, wild or domestic. Nationwide Pet Lovers are increasingly at risk of losing our furry family members to Coyotes, Bobcats, Wolves, Hawks, Mountain Lions, Aggressive Dogs, & Snakes that may jeapordize your dogs, cats, and birds"
const post_info = "We started building kennels that are safe for pets in 2006 after my daughter's dachshund was killed by a coyote. Ten years and over 2,500 predator proof dog & cat enclosures later, we have been called the Michelangelo of dog kennels. Call Us for a Free Estimate. It's our years of experience that makes us better than other dog kennels companies because with each kennel we research and develop new techniques, methods, and proprietary designs that other comapnies can not duplicate. We build and sell the Absolute STRONGEST Kennels You Can Find Anywhere!   Guaranteed!"
export default class Home extends Component{
    render(){
        return(
            <header>
                <div id="home" style={{backgroundImage: `url(${kennel})` } } >
                <p>{info}</p> 
                <p>{post_info}</p>
                </div>
            </header>
        )
    }
}