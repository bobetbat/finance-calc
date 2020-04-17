import React from 'react';
import logo from './logo.svg';
import './App.css';
import { inject } from 'mobx-react'

import AccountList from './components/AccountList'
import NavRoutes from './components/NavRoutes'
import MainContainer from './components/MainContainer'
@inject('Store')
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AccountList />
        <MainContainer />
      </div>
    );
  }
}

export default App;
