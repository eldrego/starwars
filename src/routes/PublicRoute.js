import React, { lazy } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageLayout from '../layouts/PageLayout';
import PageRoute from './PageRoute';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));

const PublicRoute = ({ match }) => {
  return (
    <>
      <Switch>
        <PageRoute
          exact
          path={`${match.path}/`}
          layout={PageLayout}
          component={Home}
        />
        <PageRoute
          exact
          path={`${match.path}/home`}
          layout={PageLayout}
          component={About}
        />
      </Switch>
    </>
  );
};

PublicRoute.propTypes = {
  match: PropTypes.object,
};

export default PublicRoute;
