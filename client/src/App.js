import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Landing from './components/layout/Landing/Landing';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Contact from './components/other/Contact/Contact';
import About from './components/other/About/About';
import Alert from './components/layout/Alert/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Account from './components/account/Account';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import CreateProfile from './components/profile-forms/CreateProfile';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className="container">
            <Alert />
              <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/about' component={About} />
                <PrivateRoute exact path='/dashboard' component={Dashboard} />
                <PrivateRoute exact path='/account' component={Account} />
                <PrivateRoute exact path='/create-profile' component={CreateProfile} />
              </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;