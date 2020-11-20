import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';


async function checkUser() {
  if (this.props.authState.isAuthenticated && !this.state.userInfo) {
    const userInfo = await this.props.authService.getUser();
    if (this._isMounted) {
      this.setState({ userInfo });
    }
  }
}

export default withOktaAuth(class Home extends Component {

	_isMounted = false;
	
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = { userInfo: null };
    this.checkUser = checkUser.bind(this);
  }

  async login() {
    this.props.history.push('/login');
  }

  async logout() {
    this.props.authService.logout('/');
  }

  async componentDidMount() {
      this._isMounted = true;
      this.checkUser();
    }

    async componentDidUpdate() {
      this._isMounted = true;
      this.checkUser();
    }

    componentWillUnmount() {
      this._isMounted = false;
    }



  render() {
    if (this.props.authState.isPending) return null;

    
    return (
      <div>
        {this.state.userInfo && (
            <div>
            <br/><h1>Welcome, {this.state.userInfo.name}!</h1><br/>
            </div>
          )}
          {this.props.authState.isAuthenticated && (
          <div>
            <p>Awareness in pandemic</p>
            <p>You can view the latest COVID19 positive cases and death count across the globe through the dashboard link above.</p>
            <p>Along with that you can view where all in the world people are meeting.</p>
            </div>)}
      </div>
    );
  }
});
