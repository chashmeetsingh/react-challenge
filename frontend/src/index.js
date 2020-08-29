import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from "./store";
import Home from "./views/containers/home";
import './views/css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Home}/>
        {/*<Route exact path='/current-weather' component={CurrentWeather}/>*/}
        {/*<Route exact path='/error' component={ErrorDisplay}/>*/}
      </App>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
