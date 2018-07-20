import React, { Component } from 'react';

import './assets/styles/imports.scss'
import Header from './components/Header/';
import Hero  from './components/Hero/';
import About from './components/About/';
import Focus from './components/Focus/';
// import Video from './components/Video/';
import Video from './containers/Video';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Hero />
          <About />
          <Focus />
          <Video />
      </div>
    );
  }
}

export default App;
