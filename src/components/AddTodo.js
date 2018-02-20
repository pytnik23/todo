import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoForm from './TodoForm';

const AddTodo = ({ addTodo }) => (
    <TodoForm onSubmit={addTodo} />
);

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default connect(null, { addTodo })(AddTodo);
