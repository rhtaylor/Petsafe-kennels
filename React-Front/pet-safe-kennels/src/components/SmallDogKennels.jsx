import React, { Component } from 'react' 

export default class SmallDogKennels extends Component{
    constructor(props){
        super(props) 
        this.backUp = this.backUp.bind(this)
    }
    componentDidMount(){
        debugger
    } 
    backUp(e){
        e.preventDefault() 
         
        this.props.history.goBack(-1)
    }
    
    render(){
        return( <div id="small-dog-kennels-page">
            <a><h1 id="back" 
            onClick={e=>this.backUp(e)}
            >{'<-Back'}</h1></a>
            <h1>WOOOOO</h1> 
            <p>Small, durablle, attrictive, </p> 
            <p>Low profile and out of the way of your home </p>
            <p>Do not obstruct window view, and out of the view of HOA</p>
            <p>choose your style of custome fabricated lifting lids and dog doors</p> 

        </div>

        )
    }
}