import { combineReducers, createStore } from 'redux';

import bindSyncListener from './reduxBindSyncListener.utils';

export default (stores) => (
    bindSyncListener(
        createStore(
            combineReducers(stores),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    )
)