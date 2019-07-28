import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

import events from '../stores/events';

export default () => {

    const dispatch = useDispatch();

    return useMemo(
        () => ({
            setBasis: (basis) => dispatch({
                type: events.LAYOUT_SET_BASIS,
                payload: basis
            }),
            setOrientation: (orientation) => dispatch({
                type: events.LAYOUT_SET_ORIENTATION,
                payload: orientation
            })
        }),
        [
            dispatch
        ]
    );
}