import React from "react";
import PropTypes from "prop-types";

const SortMethod = ({i, method, sortMethodCurrent, changeSortMethod, handleToggle}) => {
  const handleClick = () => {
    changeSortMethod(method);
    handleToggle();
  };

  return <li
    className = {`places__option ${method.name === sortMethodCurrent.name ? `places__option--active` : ``}`}
    tabIndex = {i}
    onClick = {handleClick}>
    {method.name}
  </li>;
};

export default SortMethod;
