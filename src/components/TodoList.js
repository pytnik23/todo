import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { toggleTodo, editTodo, deleteTodo, saveTodo, cancelEditTodo } from '../actions';

import { getParsedText } from '../utils';

import classNames from 'classnames';

import Todo from './Todo';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_NEW':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
};

const getSearchTodos = (todos, searchString) => {
    const { text, tags } = getParsedText(searchString);

    return todos.filter(todo => {
        let textMatched = todo.text.indexOf(text) !== -1;

        if (tags) {
            let tagsMatched = false;

            if (tags && todo.tags) {
                tagsMatched = tags.every(tag => {
                    return todo.tags.some(t => {
                        return t.indexOf(tag) !== -1;
                    });
                });
            }

            return textMatched && tagsMatched;
        }

        return textMatched;
    });
};

const TodoList = ({
    todos,
    toggleTodo,
    editTodo,
    saveTodo,
    deleteTodo,
    cancelEditTodo
}) => {

    const todoClass = classNames({
        todo: true
    });

    return (
        <ul className={todoClass}>
            {
                todos.map(todo => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        tags={todo.tags}
                        date={todo.date}
                        completed={todo.completed}
                        isEditMode={todo.isEditMode}
                        onToggleClick={() => toggleTodo(todo.id)}
                        onEditClick={() => editTodo(todo.id)}
                        onDeleteClick={() => deleteTodo(todo.id)}
                        onSaveClick={(text, tags, date) => saveTodo(text, tags, date, todo.id)}
                        onCalcelClick={() => cancelEditTodo(todo.id)}
                    />
                ))
            }
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    saveTodo: PropTypes.func.isRequired,
    cancelEditTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const visibleTodos = getVisibleTodos(state.todos, state.visibilityFilter);
    const searchTodos = getSearchTodos(visibleTodos, state.search);

    return {
        todos: searchTodos
    };
};

export default connect(
    mapStateToProps,
    {
        toggleTodo,
        editTodo,
        deleteTodo,
        saveTodo,
        cancelEditTodo
    }
)(TodoList);
