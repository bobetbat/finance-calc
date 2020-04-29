import React from 'react';
import './App.css';
import { inject } from 'mobx-react'

import AccountList from './components/AccountList'
import MainContainer from './components/MainContainer'

@inject('Store')
class App extends React.Component {
  componentDidMount() {
    this.props.Store.account.setAccount()
    this.props.Store.account.setAllTransactions()
  }

  render() {
    const trans = this.props.Store.account.getAllTransactions
    console.log(trans);
    console.log('store',this.props.Store);
    return (
      <div className="App">
        <AccountList />
        <MainContainer />
      </div>
    );
  }
}

export default App;
