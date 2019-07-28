import events from '../stores/events';

export default (store) => {

    store.dispatch({
        type: events._INIT_
    });

    window.addEventListener('storage', (event) => {
        if (event.storageArea === window.localStorage) {
            try {
                store.dispatch({
                    type: events._SYNC_RECEIVE_,
                    payload: JSON.parse(event.newValue),
                    _key: event.key
                });
            } catch (e) {
                // ignore other data format other than JSON
            }
        }
    }, false);

    return store;
};