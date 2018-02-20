import React, { Component } from 'react';

import PropTypes from 'prop-types';

import moment from 'moment';
import { getParsedText } from '../utils';

import MdAccessTime from 'react-icons/lib/md/access-time';
import MdClear from 'react-icons/lib/md/clear';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';

import DatePicker from './DatePicker';
import IconButton from './IconButton';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.getInitialText(props),
            date: props.date || null,
            showDatePicker: false
        };
    }

    getInitialText = props => {
        if (props.text && props.tags) {
            return `${props.text} #${props.tags.join(' #')}`;
        } else if (props.text) {
            return props.text;
        } else {
            return '';
        }
    }

    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    }

    handleDateChange = date => {
        this.setState({
            date,
            showDatePicker: false
        });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { text, date } = this.state;

        if (text) {
            const parsedText = getParsedText(text);
            this.props.onSubmit(parsedText.text, parsedText.tags, date);
            this.resetForm();
        }
    }

    handleCancel = e => {
        if (e.keyCode === 27) {
            if (this.props.onCancel) {
                this.props.onCancel();
            }
        }
    }

    resetForm = () => {
        this.setState({
            text: '',
            date: null,
            showDatePicker: false
        });
    }

    resetDate = () => {
        this.setState({ date: '' });
    }

    handleToggleCalendar = () => {
        this.setState({ showDatePicker: !this.state.showDatePicker });
    }

    componentDidMount() {
        this.textInput.focus();
        this.textInput.select();
    }

    render() {
        const { text, date } = this.state;

        return (
            <form
                className="form"
                onSubmit={this.handleSubmit}
            >
                <input
                    placeholder="What needs to be done?..."
                    className="form__input"
                    ref={(input) => this.textInput = input}
                    type="text"
                    name="text"
                    value={text}
                    onChange={this.handleChange}
                    onKeyDown={this.handleCancel}
                />
                {date &&
                    <IconButton onClick={this.resetDate}>
                        <MdClear size={18} />
                    </IconButton>
                }
                <IconButton onClick={this.handleToggleCalendar}>
                    {
                        date
                        && moment(date).format("MMM Do YYYY")
                        || <MdAccessTime size={18} />
                    }
                </IconButton>
                {this.state.showDatePicker &&
                    <DatePicker
                        date={date}
                        onChange={this.handleDateChange}
                    />
                }
                <IconButton type="submit">
                    <MdArrowForward
                        size={30}
                        color="#E71D36"
                    />
                </IconButton>
            </form>
        );
    }
}

TodoForm.propTypes = {
    text: PropTypes.string,
    tags: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func
};

export default TodoForm;
