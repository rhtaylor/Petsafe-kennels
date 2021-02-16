import React, { Component } from 'react' 
import '../css/kennel-card.scss'

export default class DogKennel extends Component{
    constructor(props){ 
        super(props) 
        this.state={
            i: 0
        }
        this.makeKennels = this.makeKennels.bind(this) 
        this.setTimer = this.setTimer.bind(this)
        
    }   

     setTimer(){
            setInterval(function () {
            
            this.setState({i: ++ this.state.i})
            
        }.bind(this), this.props.delay);
    } 
     
    makeKennels(){ 
        debugger
         let kennel = this.props.info[this.state.i] 
         this.setTimer()
            return ( 
            <div className="parentDog" key={this.i}>
            <div className="myKennels">  
                <h3>{kennel.title}</h3>
                <ul>
                    <li>
                        <li>{kennel.info}</li>
                        <img src={kennel.img}></img> 
                        <li>Size: {kennel.size}</li>
                    </li>
                </ul>
            </div>  
            </div>
            )}
            

    render(){
        return(
            <div>{this.makeKennels()}</div>
        )
    }
}