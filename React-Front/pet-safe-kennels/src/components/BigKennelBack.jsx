import React, { Component } from 'react'
import '../css/big-kennel.scss'
export default class BigKennelBack extends Component{
    render(){
        return (<div id="big-kennel-back" style={{ display: this.props.show }}
            key={this.props.show}
            onClick={e => this.props.clickMe(e)}>
            <p>YO</p>
        </div>)
    }
}