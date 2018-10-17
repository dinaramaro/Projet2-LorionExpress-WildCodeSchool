import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './header/NavBar';
import Wrapper from './body/Wrapper';
import Footer from './footer/Footer';
import DetailVoyage from './components/DetailVoyage';
import Admin from './admin/Admin';
import AdminClient from './admin/AdminClient';
import AdminVoyage from './admin/AdminVoyage';
import CreationVoyage from './admin/CreationVoyage';
import ModificationVoyage from './admin/ModificationVoyage';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Wrapper} />
          <Route path="/detailvoyage" component={DetailVoyage} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin/client" component={AdminClient} />
          <Route path="/admin/voyage" component={AdminVoyage} />
          <Route path="/admin/creation-voyage" component={CreationVoyage} />
          <Route path="/admin/modification-voyage" component={ModificationVoyage} />

        </Switch>
        
        <Footer />
      </div>
    );
  }
}

export default App;
