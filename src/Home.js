import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import info from './images/COVID_Info.PNG';
import info1 from './images/Covid_knowabout.PNG';
import info2 from './images/Covid_spread.png';
import info3 from './images/Covid_protect.png';
import info4 from './images/Covid_socialdistancing.PNG';
import info5 from './images/Covid_ifsick.PNG';
import info6 from './images/Covid_severeill.PNG';
import stats from './images/Covid_cases.PNG';
import styled from 'styled-components';
import CarouselImages from './CarouselImages';


const H1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: darkslateblue;
`;

const H2 = styled.h2`
  font-size: 23px;
  font-weight: bold;
  color: darkslateblue;
`;


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
            <br/><H1>Welcome, {this.state.userInfo.name}!</H1><br/>
            
            </div>
          )}  
          
          {this.props.authState.isAuthenticated && (
          <div style={{ color:"darkslateblue"  }}>       
            <p>Awareness is important in pandemic..</p>
            <p>You can view the latest COVID19 positive cases and death count across the world through the <b>Dashboard</b> link above.</p>
            <p>Along with that you can view where all in the world people are meeting.</p>
          
            </div>)}    
          
          
          
          {!this.props.authState.isAuthenticated && (
          <div>
          <CarouselImages />
          <br/><H2> To view the latest Covid19 cases count and Twitter Meetup information across the globe, Login!!</H2>
          </div>   )}               
          
      </div>
    );
  }
});
