import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { loadState, saveState } from '../localStorage';

import ReactGA from 'react-ga';

const preloadedState = loadState();

ReactGA.initialize('UA-109271097-1');
const googleAnalyticsMW = store => next => action => {
    ReactGA.event({
        category: 'User',
        action: action.type
    });

    return next(action);
};

let currentValue;
const localStorageMW = store => next => action => {
    const result = next(action);

    let previousValue = currentValue;
    currentValue = store.getState().todos;

    if (previousValue !== currentValue) {
        saveState({
            todos: currentValue
        });
    }

    return result;
}

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(googleAnalyticsMW, localStorageMW)
);

export default store;
