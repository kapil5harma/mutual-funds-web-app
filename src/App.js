import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainPage from './components/layout/MainPage';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='main-container'>
          <MainPage />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
