import React, { Component } from 'react'  
import './App.css'; 
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home.jsx'
import NavBar from './NavBar.jsx'
class App extends Component{ 
  
  render(){
  return (<header className="App-header">
       <Router>
       <Route path='/' component={NavBar} />
       <Route path="/" component={Home} />
     </Router>
     </header>
    );
}
}
export default App;
