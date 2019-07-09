import React, { Component } from 'react';
import {
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import './App.css';
import Home from './Home';
import ManageRec from './ManageRec';
import Header from  './Header';




// class component
class App extends Component {
  

  render() {
    

    return (
     <div>
      <div><Header /></div>
      <div className="App">
        <div className="nav">
   
          <NavLink exact to="/" activeClassName="active">Home Page</NavLink>
          <NavLink to="/health" activeClassName="active">Hospital</NavLink>
          <NavLink to="/school" activeClassName="active">School</NavLink>
          <NavLink to="/report" activeClassName="active">Report</NavLink>
        </div>
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/health"  render={ () => <ManageRec name ='Health'   />} ></Route>
          <Route path="/school"  render= { () => <ManageRec name='School'   />} ></Route>
          <Route path="/report"  render= { () => <ManageRec name='Report' />} ></Route>
        </Switch>
      </div>
   </div>
    );
  }
}

export default App;
