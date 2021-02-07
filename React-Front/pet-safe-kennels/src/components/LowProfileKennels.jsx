import React, { Component } from 'react' 
import '../css/small-dog-kennel.scss'
export default class LowProfile extends Component{
    constructor(props){
        super(props) 
        this.state={
            display: 'show'
        }
    } 
    componentDidUpdate(props){
        debugger 
        this.state.display == 'show' ? 
        this.setState({display: 'none'}) :
        console.log("nothing to see here")
    }
    render(){
        return(
                <div id="small-dog-kennel"  
                onClick={e=>this.props.clickMe(e)} 
                style={{"display" : this.state.display}}
                key={this.props.show}
                >
                <p>SMALL DOG OUTDOOR KENNELS</p>
              </div>  
              

        )
    }
}