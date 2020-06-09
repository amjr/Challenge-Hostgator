import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from 'screens/main';
import { useSelector } from 'react-redux';

export default () => {
  const path = useSelector(state => state.url.path);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={path} component={MainScreen} />
      </Switch>
    </BrowserRouter>
  );
};
