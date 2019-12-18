import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../component/layout/layout.jsx';

const withLayout = (Component, layoutClassName) => (props) => (
  <Layout layoutClassName = {layoutClassName}>
    <Component
      {...props}/>
  </Layout>
);

withLayout.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  layoutClassName: PropTypes.string,
};

export default withLayout;
