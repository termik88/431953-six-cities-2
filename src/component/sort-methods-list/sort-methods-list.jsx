import React from "react";
import PropTypes from "prop-types";

import SortMethod from "../sort-method/sort-method.jsx";

const SortMethodsList = ({sortMethodCurrent, sortMethodsList, onChangeSortMethod, handleToggle, isOpen}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleToggle}>
        {sortMethodCurrent.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
        {sortMethodsList.map((method, i) => (
          <SortMethod
            key = {`sort-method-${i}`}
            i = {i}
            method = {method}
            sortMethodCurrent = {sortMethodCurrent}
            onChangeSortMethod = {onChangeSortMethod}
            handleToggle = {handleToggle}
          />
        ))
        }
      </ul>
    </form>
  );
};

SortMethodsList.propTypes = {
  sortMethodsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  })),
  sortMethodCurrent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  }),
  onChangeSortMethod: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default SortMethodsList;
