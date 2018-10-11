import React, { Component } from 'react';
import './App.css';
import NavBar from './header/NavBar';
import Wrapper from './body/Wrapper';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Wrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
