import React, { Component } from 'react' 
import '../css/kennel-card.scss'

export default class DogKennel extends Component{
    constructor(props){ 
        super(props) 
        this.makeKennels = this.makeKennels.bind(this)

    } 
    makeKennels(kennelArray){
        return kennelArray.map( kennel =>{ 
            return ( 
            <div className="parentDog">
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
            )
    }

    render(){
        return(
            <div>{ this.makeKennels(this.props.info) }</div>
        )
    }
}