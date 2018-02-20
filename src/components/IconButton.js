import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({
    children,
    onClick,
    className = '',
    type = "button"
}) => (
    <button
        type={type}
        className={`IconButton ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);

IconButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    type: PropTypes.string
};

export default IconButton;
