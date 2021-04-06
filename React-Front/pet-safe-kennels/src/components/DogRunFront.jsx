import React from 'react' 
import { Component } from 'react';
import '../css/dogrun.scss'
export default class DogRunFront extends Component{
    constructor(props) {
        super(props) 
        this.openUP = this.openUP.bind(this)
        this.state = {
            'min-width': '400px',
            position: 'relative', 
            'z-index': 0
            
        }
    } 
    openUP(e){
        this.setState({'min-width': '50em', 'z-index': 15, 'position': 'fixed'}) 

    }
    render(){ 
        debugger
        return(<div className="custom-kennels"
                id={this.props.name}
                // onClick={(e)=>this.openUP(e) }
                style={{'maxWidth': this.props.picture, position: this.props.pos }} 
                key={this.state['min-width']}> 
                <img style={{'min-width': this.state['min-width'], 'z-index': this.state['z-index']}} src={this.props.pic}></img>
                {/* <p className="dog_run">Click to Open Dog Run</p> */}
                <p>&nbsp;</p>
            </div>
        )
    }
}