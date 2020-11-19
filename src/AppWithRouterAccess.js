import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';


export default withRouter(class AppWithRouterAccess extends Component {
  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired() {
    this.props.history.push('/login')
  }

  render() {

    return (
        <Security issuer='https://<okta-domain>/oauth2/default'
                  clientId='{clientId}'
                  redirectUri={window.location.origin + '/login/callback'}
                  onAuthRequired={this.onAuthRequired} >
          <Route path='/' exact={true} component={Home} />
          <SecureRoute path='/dashboard' component={Dashboard} />
          <Route path='/login' render={() => <Login baseUrl='https://<okta-domain>' />} />
          <Route path='/login/callback' component={LoginCallback} />
        </Security>
    );
  }
});
