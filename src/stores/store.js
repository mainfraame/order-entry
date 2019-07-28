import createStore from '../utils/reduxCreateStore.utils';

import orderEntry from '../../fixtures/orderEntries';

import layoutReducer from './reducers/layout.reducer';
import orderEntryReducer from './reducers/orderEntry.reducer';
import reduxBindReducer from '../utils/reduxBindReducer.utils';

export default createStore({
    layout: reduxBindReducer({
        key: 'layout',
        adapter: 'sessionStorage',
        defaultState: {
            orientation: 'horizontal',
            basis: {
                vertical: 0.2,
                horizontal: 0.1
            }
        },
        reducer: layoutReducer
    }),
    orderEntry: reduxBindReducer({
        key: 'orderEntry',
        adapter: 'localStorage',
        defaultState: orderEntry,
        omitKeys: ['isLoading'],
        reducer: orderEntryReducer
    })
});