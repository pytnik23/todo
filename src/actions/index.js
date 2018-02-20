export const addTodo = (text, tags, date) => {
    return {
        type: 'ADD_TODO',
        text,
        tags,
        date: date ? new Date(date) : '',
        id: Date.now(),
        completed: false,
        isEditMode: false
    };
};

export const saveTodo = (text, tags, date, id) => {
    return {
        type: 'SAVE_TODO',
        id,
        text,
        tags,
        date
    };
};

export const editTodo = id => {
    return {
        type: 'EDIT_TODO',
        id
    };
};

export const cancelEditTodo = id => {
    return {
        type: 'CANCEL_EDIT_TODO',
        id
    };
};

export const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    };
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export const setSearch = searchString => {
    return {
        type: 'SEARCH_TODO',
        searchString
    };
};
