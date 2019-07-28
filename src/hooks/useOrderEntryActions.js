import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import uuidV4 from 'uuid/v4';

import events from '../stores/events';

export default () => {

    const dispatch = useDispatch();

    return useMemo(
        () => ({
            addEntry: (order) => dispatch({
                type: events.ORDER_ENTRY_ADD_ORDER,
                payload: {
                    id: uuidV4(),
                    ...order
                }
            }),
            setIsLoading: (isLoading) => dispatch({
                type: events.ORDER_ENTRY_SET_IS_LOADING,
                payload: isLoading
            })
        }),
        [
            dispatch
        ]
    );
}