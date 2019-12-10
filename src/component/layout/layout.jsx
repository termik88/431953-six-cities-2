import React from 'react';
import SvgBlock from "../svg-block/svg-block.jsx";
import {HeaderContainer} from "../header/header.jsx";

export default ({children, layoutClassName}) => {
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
