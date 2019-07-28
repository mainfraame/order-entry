import events from '../events';

export default {
    [events.ORDER_ENTRY_ADD_ORDER]: (state, action) => ({
        ...state,
        rowData: [
            ...state.rowData,
            action.payload
        ]
    }),
    [events.ORDER_ENTRY_SET_IS_LOADING]: (state, action) => ({
        ...state,
        isLoading: action.payload
    })
};