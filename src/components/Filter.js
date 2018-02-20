import React from 'react';

import FilterLink from './FilterLink';

const Filter = () => (
    <div className="filter">
        <FilterLink filter="SHOW_ALL">All</FilterLink>
        <FilterLink filter="SHOW_NEW">New</FilterLink>
        <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </div>
);

export default Filter;
