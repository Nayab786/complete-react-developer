import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
};



function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      
    </div>
  );
}

export default App;
