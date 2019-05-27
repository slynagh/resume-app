import React from 'react';

import AppBar from './components/AppBar';
import MyFooter from './components/Footer';
import MainContentArea from './components/MainContentArea';
import Menu from './components/Menu'
//css
import './css/App.css';
import './css/fonts.css';


function App() {
  return (
    <div className="app">
      <Menu />
      <AppBar />
      <MainContentArea />
      <MyFooter />
     
    
    </div>
  );
}

export default App;
