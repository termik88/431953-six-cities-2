import React from 'react';
import PropTypes from 'prop-types';

import {HeaderContainer} from "../header/header.jsx";

const Layout = ({children, layoutClassName}) => {
  return (
    <>
      <div className={`page ${layoutClassName ? `${layoutClassName}` : ``}`}>
        <HeaderContainer/>
        {children}
      </div>
    </>
  );
};

Layout.propTypes = {
  layoutClassName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
};

export default Layout;
