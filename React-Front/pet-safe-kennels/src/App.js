import React, { Component } from 'react'  
import './App.css'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx' 
import Kennel from './Kennel.jsx' 
import DogRun from './DogRun.jsx' 
import Contact from './Contact.jsx'

class App extends Component{ 
  componentDidMount(){
    fetch('http://localhost:3000/customers.json') 
    .then(res =>{
      console.log(res.body) 
      console.log(res.status)  
      console.log(res)
      return res.json();
    })
    .then(data => console.log(data)) 
    .catch(err => console.log(err))
  }
  render(){
  return (<header className="App-header">
       <Router>
       <Route path='/' component={NavBar} />
       <Route exact path='/' render={(routerProps)=> <Home {...routerProps} />} /> 
       <Route path='/Kennel' component={Kennel} /> 
       <Route path='/DogRun' component={DogRun} /> 
       <Route path='/Contact' component={Contact} />
     </Router>
     </header>
    );
}
}
export default App;
