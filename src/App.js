import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './assets/styles/imports.scss'
// import Header from './components/Header/';
import Hero  from './components/Hero/';
import About from './components/About/';
// import Focus from './components/Focus/';
// import Video from './components/Video/';
import Header from './containers/Header';
import Video from './containers/Video';
import Focus from './containers/Focus';
import Team from './containers/Team';



class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Hero />
                <About />
                <Focus />
                <Video />
                <Team />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
