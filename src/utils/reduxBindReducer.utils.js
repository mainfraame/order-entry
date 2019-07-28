import omit from 'lodash.omit';

import events from '../stores/events';
import storage from './storage.utils';

export default ({adapter, defaultState, key, reducer, omitKeys = []}) => (state, action) => {

    const isSync = action.type === events._SYNC_RECEIVE_ && key === action._key;

    if (isSync) {
        return {
            ...state,
            ...omit(action.payload, omitKeys)
        };
    }

    const nextState = reducer[action.type] ?
        reducer[action.type](state, action) :
        state || adapter ?
            storage.getItem(adapter, key, defaultState) :
            defaultState;

    if ((nextState !== state) && adapter) {
        storage.setItem(adapter, key, nextState);
    }

    return nextState;
};