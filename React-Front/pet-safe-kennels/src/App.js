import React, { Component } from 'react'  
import './App.css'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx' 
import Kennel from './Kennel.jsx' 
import DogRun from './DogRun.jsx' 
import Contact from './Contact.jsx'
class App extends Component{ 
  
  render(){
  return (<header className="App-header">
       <Router>
       <Route path='/' component={NavBar} />
       <Route exact path='/' component={Home} /> 
       <Route path='/Kennel' component={Kennel} /> 
       <Route path='/DogRun' component={DogRun} /> 
       <Route path='/Contact' component={Contact} />
     </Router>
     </header>
    );
}
}
export default App;
