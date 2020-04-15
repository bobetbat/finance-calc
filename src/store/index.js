import { types } from 'mobx-state-tree'

import Transactions from './Transaction'

const Store = types.model('AppStore', {
    transactions: types.optional(Transactions, Transactions.create({})),
    // ui: types.optional(UIStore, UIStore.create({})),
    // api: types.optional(ApiStore, ApiStore.create({}))
})

export default Store.create({})
