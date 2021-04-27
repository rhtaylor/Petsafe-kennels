import react, { Component } from 'react'

export default class Pic extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(<div id="pup" 
        onClick={e=>this.props.changeDisplay(e)}
        >
            <img src={this.props.img.img} />
        </div>)
    }
}