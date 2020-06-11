import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Footer />
        </Router>
      </>

    </div>
  );
}

export default App;
