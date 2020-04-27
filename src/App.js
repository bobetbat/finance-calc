import React from 'react';
import './App.css';
import { inject } from 'mobx-react'

import AccountList from './components/AccountList'
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
