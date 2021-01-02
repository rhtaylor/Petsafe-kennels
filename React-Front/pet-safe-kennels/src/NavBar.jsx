import React, { Component } from 'react'
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'; 
const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white' 
} 

export default class NavBar extends Component{
    render(){
        return(<div>
            <NavLink
                to="/Kennel"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact
                /* add styling to Navlink */
                style={link}
                /* add prop for activeStyle */
                activeStyle={{
                    background: 'darkblue'
                }}
            >Kennels</NavLink>
            <NavLink
                to="/Dog Run"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact
                /* add styling to Navlink */
                style={link}
                /* add prop for activeStyle */
                activeStyle={{
                    background: 'darkblue'
                }}
            >Dog Runs</NavLink>
            <NavLink
                to="/HorseShade"
                /* set exact so it knows to only set activeStyle when route is deeply equal to link */
                exact
                /* add styling to Navlink */
                style={link}
                /* add prop for activeStyle */
                activeStyle={{
                    background: 'darkblue'
                }}
            >Horse Shade</NavLink>   
            <NavLink 
            to="/Pics" 
            exact 
            style={link}
            activeStyle={{
                backrround: 'darkblue' 
            }}>Pics</NavLink>
        </div>)
    }
}