import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Container } from 'semantic-ui-react';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import NavigationBar from './NavigationBar';


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
        <Security issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
                  clientId={process.env.REACT_APP_OKTA_CLIENT_ID}
                  redirectUri={window.location.origin + '/login/callback'}
                  onAuthRequired={this.onAuthRequired}>
          <NavigationBar />
          <Container>
          <Route path='/' exact={true} component={Home} />
          <SecureRoute path='/dashboard' component={Dashboard} />
          <Route path='/login' render={() => <Login baseUrl={process.env.REACT_APP_OKTA_ORG_URL} />} />
          <Route path='/login/callback' component={LoginCallback} />
          </Container>
        </Security>
    );
  }
});
