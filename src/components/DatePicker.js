import React from 'react';
import PropTypes from 'prop-types';

import Datetime from 'react-datetime';

import 'react-datetime/css/react-datetime.css';
import 'moment/locale/en-gb';

const DatePicker = ({
    onChange,
    date
}) => (
    <Datetime
        className="date-picker"
        locale="en-gb"
        timeFormat={false}
        input={false}
        open={true}
        onChange={onChange}
        value={date}
    />
);

DatePicker.propTypes = {
    date: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    onChange: PropTypes.func.isRequired
};

export default DatePicker;
