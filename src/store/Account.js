import { types } from 'mobx-state-tree'
import * as dataTest from './dataTest'

const Transaction = types
  .model('Transaction', {
    id: types.optional(types.string, ''),
    title: types.optional(types.string, ''),
    discription: types.optional(types.string, ''),
    amount: types.optional(types.number, 0),
    date: types.optional(types.number, 0),
    executed: types.optional(types.boolean, false),
    addedToTemplate: types.optional(types.boolean, false),
  })

const Account = types
  .model('Account', {
    id: types.optional(types.string, ''),
    actualBalance: types.optional(types.number, 0),
    estimatedBalance: types.optional(types.number, 0),
    transactions: types.optional(types.array(Transaction), []),
  })
  .actions(self => ({
    setAccount() {
      const { id, actualBalance, estimatedBalance } = dataTest.account
      self.id = id
      self.actualBalance = actualBalance
      self.estimatedBalance = estimatedBalance
    },
    setAllTransactions() {
      const { transactions } = dataTest
      console.log(transactions,'transact');
      self.transactions = transactions.map(el => Transaction.create(el))
      console.log(transactions,'transactstore');
      console.log(self.transactions,'transactstore');

    }
  }))
  .views(self => ({
    get getAllTransactions() {
      return self.transactions
    }
  }))

export default Account