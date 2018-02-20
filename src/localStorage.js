export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('todos');
        if (serializedState === null) {
            return undefined;
        }
        return { todos: JSON.parse(serializedState) };
    } catch (err) {
        return undefined;
    }
};

export const saveState = ({ todos }) => {
    try {
        const serializedState = JSON.stringify(todos);
        localStorage.setItem('todos', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
}
