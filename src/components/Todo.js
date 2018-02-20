import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';

import MdCheck from 'react-icons/lib/md/check';
import MdEdit from 'react-icons/lib/md/edit';
import MdDelete from 'react-icons/lib/md/delete';

import IconButton from './IconButton';
import TodoForm from './TodoForm';

const Todo = ({
    text,
    tags,
    date,
    completed,
    isEditMode,
    onToggleClick,
    onEditClick,
    onSaveClick,
    onDeleteClick,
    onCalcelClick
}) => {

    if (isEditMode) {
        return (
            <li>
                <TodoForm
                    onSubmit={onSaveClick}
                    onCancel={onCalcelClick}
                    text={text}
                    tags={tags}
                    date={date}
                />
            </li>
        );
    }

    const todoItemClass = classNames({
        todo__item: true,
        todo__item_done: completed,
        todo__item_past: date && Date.parse(date) - Date.now() < 0
    });

    const formatDate = date ? moment(date).format("MMM DD") : '';

    return (
        <li>
            <div className={todoItemClass}>
                <button
                    className="todo__checkBtn"
                    type="button"
                    onClick={onToggleClick}
                >
                    <MdCheck
                        className="todo__checkIcon"
                        size={24}
                    />
                </button>
                <span className="todo__text">
                    {text}
                    <span className="todo__tags">
                        {tags ? ` #${tags.join(' #')}` : tags}
                    </span>
                </span>
                <IconButton
                    className="todo__btn"
                    onClick={onEditClick}
                >
                    <MdEdit size={16} />
                </IconButton>
                <IconButton
                    className="todo__btn"
                    onClick={onDeleteClick}
                >
                    <MdDelete size={16} />
                </IconButton>
                <span className="todo__date">{formatDate}</span>
            </div>
        </li>
    );
};

Todo.propTypes = {
    text: PropTypes.string,
    tags: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    completed: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
    onToggleClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onCalcelClick: PropTypes.func.isRequired
};

export default Todo;
