import React from "react";
import PropTypes from "prop-types";

const SortMethod = ({i, method, sortMethodCurrent, onChangeSortMethod, handleToggle}) => {
  const handleClick = () => {
    onChangeSortMethod(method);
    handleToggle();
  };

  return <li
    className = {`places__option ${method.name === sortMethodCurrent.name ? `places__option--active` : ``}`}
    tabIndex = {i}
    onClick = {handleClick}>
    {method.name}
  </li>;
};

SortMethod.propTypes = {
  i: PropTypes.number.isRequired,
  sortMethodsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  })),
  sortMethodCurrent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  }),
  method: PropTypes.shape({
    name: PropTypes.string.isRequired,
    method: PropTypes.func.isRequired,
  }),
  onChangeSortMethod: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
};

export default SortMethod;
