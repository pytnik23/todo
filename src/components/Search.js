import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { setSearch } from '../actions';

const Search = ({ setSearch }) => (
    <input
        className="search"
        type="search"
        placeholder="Search task..."
        onChange={e => setSearch(e.target.value)}
    />
);

Search.propTypes = {
    setSearch: PropTypes.func.isRequired
};

export default connect(null, { setSearch })(Search);
