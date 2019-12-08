import React from 'react';
import Layout from '../../component/layout/layout.jsx';

const withLayout = (Component, layoutClassName) => (props) => (
  <Layout layoutClassName = {layoutClassName}>
    <Component
      {...props}/>
  </Layout>
);

export default withLayout;
