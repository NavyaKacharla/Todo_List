
import React from 'react';

const FilterBar = ({ setFilter }) => {
  return (
    <div className="filter-bar">
      <button onClick={() => setFilter('all')} className="filter-button">All</button>
      <button onClick={() => setFilter('completed')} className="filter-button">Completed</button>
      <button onClick={() => setFilter('incomplete')} className="filter-button">Incomplete</button>
    </div>
  );
};

export default FilterBar;
