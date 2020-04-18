import { types } from 'mobx-state-tree'

import Account from './Account'

const Store = types.model('Store', {
    account: types.optional(Account, Account.create({})),
    // ui: types.optional(UIStore, UIStore.create({})),
    // api: types.optional(ApiStore, ApiStore.create({}))
})

export default Store.create({})
