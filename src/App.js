import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


import BackGround from './BackGround'
import Projects from './Projects'
import Nav from './Nav'
import Home from './Home'
import People from './People'
import Footer from './Footer'
import Process from './Process'

import AI from './AI'
import Banking from './Banking'
import Blockchain from './Blockchain'
import Design from './Design'




import './App.css'



class App extends Component {
  render() {
    return (
      <div className="App">
        <BackGround/>
        <Nav />
        <Route exact path = '/' component = {Home} />
        <Route  path = '/people' component = {People} />
        <Route  path = '/projects' component = {Projects} />
        <Route  path = '/process' component = {Process} />


        <Route exact path = '/ai' component = {AI} />
        <Route exact path = '/banking' component = {Banking} />
        <Route exact path = '/dlt' component = {Blockchain} />
        <Route exact path = '/design' component = {Design} />


        <Footer />
      </div>
    );
  }
}

export default App;
