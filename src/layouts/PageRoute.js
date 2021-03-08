import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader } from 'components';

const PageRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <Suspense fallback={<Loader show />}>
            <Layout>
              <Component {...props} />{' '}
            </Layout>
          </Suspense>
        );
      }}
    />
  );
};

PageRoute.propTypes = {
  component: PropTypes.object,
  layout: PropTypes.func,
  location: PropTypes.object,
};

export default PageRoute;
