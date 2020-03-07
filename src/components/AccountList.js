import React from 'react'
import PropTypes from 'prop-types'

import MainAccount from './MainAccount'


const accounts = [
  {
    title: 'acc1',
    amount: '1234'
  },
  {
    title: 'acc2',
    amount: '1234'
  },  
  {
    title: 'acc3',
    amount: '1234'
  },
]

class AccountList extends React.Component {
  render() {
    return (
      <div className="accountList">
        <MainAccount />
        {accounts.map( account => (
          <div className="accountSingle">
            <div>
              {account.title}
            </div>
            <div>
              {account.amount}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default AccountList
