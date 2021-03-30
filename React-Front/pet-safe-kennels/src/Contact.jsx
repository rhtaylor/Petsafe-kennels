import React, { Component } from 'react' 
import ContactUs from './EmailForm.jsx'
import Button from './Button.jsx'
import './css/button.scss'

export default class Contact extends Component{
    constructor(props){
        super(props)
        this.state={
            display: null
        }
        this.updateForm = this.updateForm.bind(this)
    
    }
    updateForm(e) {
        e.preventDefault()
        debugger
        this.state.display == null
            ?
            this.setState(
                {
                    display: "flex",
                    direction: 'column'
                })
            :
            this.setState({
                display: null,
                direction: null
            })

    } 
    render(){
        return(<div id="dog-parent">
            <Button handleClick={(e) => this.updateForm(e)} />
            <ContactUs display={{ display: this.state.display }} stateToProp={this.state.direction} history={this.props.history}
                updateForm={this.updateForm}
            /> 
            <h2>Phone calls are the preferred way to communicate with us.</h2> 
            <h3>Contact info</h3>
            <h3 id="call">please call: 520-730-7020</h3>  
            <h3 id="highlight">Important: Pet-Safe-Kennels Custom builds kennels by hand with wielders. These craftsmen
            will build the perfect kennel for you, your home, and your pet. The minimum price per Kennel is $2400. However that is also the price of a purebred pitbull. These kennels will outlast your car.</h3>
        </div>)
    }
}