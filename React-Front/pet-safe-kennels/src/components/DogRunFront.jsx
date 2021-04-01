import React from 'react' 
import { Component } from 'react';
import '../css/dogrun.scss'
export default class DogRunFront extends Component{
    
    render(){
        return(<div id="open-dog-run"
                onClick={e => this.props.clickMe(e)}

                style={{ "display": this.props.show }}

                key={this.props.show}
            >
                <p>Open Dog Run</p>
                <p id="bottom">click me</p>
            </div>
        )
    }
}