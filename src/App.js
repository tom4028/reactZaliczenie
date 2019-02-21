import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Catalog from './components/catalog/Catalog';



class App extends Component {

  render() {
    return (

      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalog" component={Catalog} />
            <Route exact path="/about" component={About} />
            <Route render={()=><h1>Page Not Found :(</h1>} />
          </Switch>

          <Footer />
        </div>

      </Router>

    );
  }
}

export default App;
