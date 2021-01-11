import React, { Component } from 'react' 
import kennel from './kennel.jpg'  
import Kennel from './Kennel.jsx' 
import home from './favicon.ico';
import './home.css'   
import './home.scss'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; 
const info = "We Can Help!   No Matter Where You Live. A rescued pet should not be threatened by aggressive animals, wild or domestic. Nationwide Pet Lovers are increasingly at risk of losing our furry family members to Coyotes, Bobcats, Wolves, Hawks, Mountain Lions, Aggressive Dogs, & Snakes that may jeapordize your dogs, cats, and birds"
const post_info = "We started building kennels that are safe for pets in 2006 after my daughter's dachshund was killed by a coyote. Ten years and over 2,500 predator proof dog & cat enclosures later, we have been called the Michelangelo of dog kennels. Call Us for a Free Estimate. It's our years of experience that makes us better than other dog kennels companies because with each kennel we research and develop new techniques, methods, and proprietary designs that other comapnies can not duplicate. We build and sell the Absolute STRONGEST Kennels You Can Find Anywhere!   Guaranteed!"
const URL = 'http://localhost:3001/Kennel' 

export default class Home extends Component{
    mouseFinder(e){
        e.preventDefault()
        console.log(e.screenX, e.screenY) 
        if(e.screenX >= 170 && e.screenX <= 270 && e.screenY >= 225 && e.screenY <= 300){
            console.log("bow wow") 
            this.props.history.push('/Kennel')
        }
    }
    dog=(e)=>{
        console.log("DOGGO", e)
    
    }
    render(){
        return( 
            <div id="container">
            <header id="home"> 
                <Route path='/Kennel' component={Kennel} />
                <div  > 
                <img alt="home"  src={home} usemap="#imgmap" onClick={e=>this.mouseFinder(e)}/> 
                <map name="imgmap">
                <area onClick={e=>this.dog(e)} shape="dog" coords="149,180,229,190" href="http://localhost:3001/Kennel" alt="dog">
                </area>
                </map>
                </div> 
                
            </header> 
            <footer>
                 <p>{info}</p> 
                <p>{post_info}</p>
            </footer>  
            </div>
        )
    }
}