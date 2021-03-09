import React, { Component } from 'react' 
import '../css/kennel-card.scss'

export default class DogKennel extends Component{
    constructor(props){ 
        super(props) 
        this.state = { display: "kennel_slide"} 
        this.local_update = this.local_update.bind(this)
        
    }   
    local_update(e){
        e.preventDefault() 
        this.setState({display: 'kennel_back'})
    } 
    static getDerivedStateFromProps(props, state) {
     debugger
        return { ...state, ...props.my_state}
    } 
    render(){ 
        debugger
        return(
            <div  id={this.props.id} key={this.props.custom_class} 
                onClick={e => this.props.clickMe(e)}  
                className="parentDog" 
               >
                <div style={{display: this.props.custom_class[this.props.id].i.display}} className={this.props.my_state[this.props.id]['i'].display} key={this.props.custom_class}>
                    <h3>{this.props.my_state[this.props.id]['i'].display}</h3> 
                    <li>{this.state[this.props.id].i.display}</li> 
                    <li>{this.props.custom_class[this.props.id].i.display}</li>
                        <ul>
                                <img src={this.props.kennel.img}></img>
                                <li>Size: {this.props.kennel.size}</li>
                            
                        </ul>
                    </div>
                </div>
            
        )
    } 
    
}