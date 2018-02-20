export default function todos(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: action.id,
                    text: action.text,
                    tags: action.tags,
                    date: action.date,
                    completed: action.completed,
                    isEditMode: action.isEditMode
                },
                ...state
            ];
        case 'EDIT_TODO':
            return state.map(todo => {
                return (todo.id === action.id) ?
                    {...todo, isEditMode: true} :
                    todo;
            });
        case 'CANCEL_EDIT_TODO':
            return state.map(todo => {
                return (todo.id === action.id) ?
                    {...todo, isEditMode: false} :
                    todo;
            });
        case 'SAVE_TODO':
            return state.map(todo => {
                return (todo.id === action.id) ?
                    {
                        ...todo,
                        text: action.text,
                        tags: action.tags,
                        date: action.date,
                        isEditMode: false
                    } :
                    todo;
            });
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map(todo => {
                return (todo.id === action.id) ?
                    {...todo, completed: !todo.completed} :
                    todo;
            });
        default:
            return state;
    }
};
