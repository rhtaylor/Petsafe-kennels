import React, { Component } from 'react'
export default class DogKennelBack extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="kennel_back" style={{display: this.props.display}}>
                <div className="parentDog" key={this.props.kennel.title[0]}>
                    <div className="myKennels" key={this.props.kennel[1]}>
                        <h3>{this.props.kennel.title}</h3>
                        <ul>
                            <li>info: {this.props.kennel.info}</li>
                            <li>Size: {this.props.kennel.size}</li>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}