import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';

import routes from 'routes/index.js';

import 'assets/css/baseStyles.css';

const hist = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ffff72',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000000',
    },
  },
  typography: {
    useNextVariants: true,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router history={hist}>
      <div>
        <Header />
        <div style={{marginTop: '75px'}}>
          <Switch>
            {routes.map((route, idx) =>
            {
              return <Route path={route.path} key={idx} component={route.component} />;
            })}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
