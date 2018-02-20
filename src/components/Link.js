import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
    active,
    children,
    onClick
}) => {
    
    if (active) {
        return (
            <button
                type="button"
                className="filter__btn filter__btn_active"
            >
                {children}
            </button>
        );
    }

    return (
        <button
            type="button"
            className="filter__btn"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

Link.propTypes = {
     active: PropTypes.bool.isRequired,
     children: PropTypes.node.isRequired,
     onClick: PropTypes.func.isRequired
};

export default Link;
