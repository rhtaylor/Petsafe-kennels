import React, { Component } from 'react' 
import '../css/kennel-card.scss'

export default class DogKennel extends Component{
    constructor(props){ 
        super(props) 
        
        
    }   
    
    
    render(){
        return(
            <div className="parentDog" key={this.props.kennel.title[0]}>
                    <div className="myKennels" key={this.props.kennel[1]}>
                        <h3>{this.props.kennel.title}</h3>
                        <ul>
                            <li>
                                <li>{this.props.kennel.info}</li>
                                <img src={this.props.kennel.img}></img>
                                <li>Size: {this.props.kennel.size}</li>
                            </li>
                        </ul>
                    </div>
                </div>
            
        )
    } 
    
}