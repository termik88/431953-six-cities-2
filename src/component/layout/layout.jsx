import React from 'react';
import PropTypes from 'prop-types';

import SvgBlock from "../svg-block/svg-block.jsx";
import {HeaderContainer} from "../header/header.jsx";

const Layout = ({children, layoutClassName}) => {
  return (
    <>
      <SvgBlock/>
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
