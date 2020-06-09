import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import MovieDetail from './components/MovieDetail'
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Tv from "./components/Tv";

import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
 

  render() {
    return (
      <div className="App">
        <div>
        <Router>
          <Navbar />
          <Route path="/" exact component={Tv} />
          <Route path="/tv-movies" exact component={Tv} />
          <Route path="/details/:id" component={MovieDetail} />
        </Router>
        <Home/>
<Footer/>
        
        </div>
      </div>
    );
  }
}

export default App;
