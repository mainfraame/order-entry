export default {
    getItem: (adapter, key, initialState) => {
        try {
            return JSON.parse(window[adapter].getItem(key) || JSON.stringify(initialState));
        } catch (e) {
            console.error(`${adapter}.getItem(${key})::`, e);
        }
    },
    setItem: (adapter, key, state) => {
        try {
            window[adapter].setItem(key, JSON.stringify(state));
        } catch (e) {
            console.error(`${adapter}.setItem(${key}, state)::`, e, state);
        }
    }
};