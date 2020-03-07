import React from 'react';
import logo from './logo.svg';
import './App.css';

import AccountList from './components/AccountList'
import NavRoutes from './components/NavRoutes'
import MainContainer from './components/MainContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavRoutes />
        <AccountList />
        <MainContainer />
      </div>
    );
  }
}

export default App;
