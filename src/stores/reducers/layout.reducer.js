import events from '../events';

export default {
    [events.LAYOUT_SET_BASIS]: (state, action) => ({
        ...state,
        basis: {
            ...state.basis,
            [state.orientation]: state.basis[state.orientation] += action.payload
        }
    }),
    [events.LAYOUT_SET_ORIENTATION]: (state, action) => ({
        ...state,
        orientation: action.payload
    })
};