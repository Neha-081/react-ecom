import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
  return (
    <div>
  {/* header will be always present and rendered */}
      <Header/>  
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;