import { types } from 'mobx-state-tree'

const Time = types.model('Time', {
  current: types.optional(types.number, 0),
})

const Transaction = types
  .model('Transaction', {
    id: types.optional(types.string, ''),
    title: types.optional(types.string, ''),
    discription: types.optional(types.string, ''),
    amount: types.optional(types.number, 0),
    time: types.optional(Time, Time.create({})),
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
    setAllTransactions(data) {
      self.transactions = data.map(el => Transaction.create(el))
    }
  }))
  .views(self => ({
    get getAllTransactions() {
      return self.transactions
    }
  }))

export default Account