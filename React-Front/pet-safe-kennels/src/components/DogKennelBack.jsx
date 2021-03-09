import React, { Component } from 'react' 
import '../css/kennel-card-all.scss'
export default class DogKennelBack extends Component{
    constructor(props){
        super(props)
    }  
    componentDidMount(){
       debugger
    }
    render(){
        return(
            <div id="kennel_back" style={{ "display": `${this.props.custom_class[this.props.id].i.back}` }} key={this.props.custom_class[this.props.id].i.back} className="parentDog" >
                <div className={this.props.custom_class[this.props.id].i.back} style={{ display: this.props.custom_class[this.props.id].i.back}} key={this.props.kennel[2]}>
                        <h3>{this.props.kennel.title}</h3>
                        <ul>
                            <li>info: {this.props.kennel.info}</li>
                            <li>Size: {this.props.kennel.size}</li>

                        </ul>
                    </div>
                </div>
            
        )
    }
}