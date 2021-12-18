import React from 'react';
import Layout from '../../components/layout';

const NotFoudPage = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
  }

  return (
    <Layout>
      <p style={style}>Page not found</p>
    </Layout>
  );
}

export default NotFoudPage;
