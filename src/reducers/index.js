import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import search from './search';

export default combineReducers({
    todos,
    visibilityFilter,
    search
});
