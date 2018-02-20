const search = (state = '', action) => {
    switch (action.type) {
        case 'SEARCH_TODO':
            return action.searchString;
        default:
            return state;
    }
}

export default search;
