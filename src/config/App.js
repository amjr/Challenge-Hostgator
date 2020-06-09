import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from 'screens/main';
import { useSelector } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { THEME } from './theme';

export default () => {
  const path = useSelector(state => state.url.path);
  return (
    <MuiThemeProvider theme={THEME}>
      <BrowserRouter>
        <Switch>
          <Route exact path={path} component={MainScreen} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};
