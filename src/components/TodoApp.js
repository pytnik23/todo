import React from 'react';

import Search from './Search';
import Filter from './Filter';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodoApp = () =>  (
    <div className="container">
        <Search />
        <Filter />
        <div className="wrapper">
            <AddTodo />
            <TodoList />
        </div>
    </div>
);

export default TodoApp;
