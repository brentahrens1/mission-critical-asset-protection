import React from 'react';
import './sass/_base.scss'

import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'
import FireSystems from './components/FireSystems/FireSystems'
import WaterSystems from './components/WaterSystems/WaterSystems'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/services" exact component={Services} />
        <Route path="/fire-systems" exact component={FireSystems} />
        <Route path="/water-systems" exact component={WaterSystems} />
      </Switch>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
