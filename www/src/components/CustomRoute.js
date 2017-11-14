import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Welcome from '../components/Welcome';
import CompanyWholeMap from '../components/company/CompanyWholeMap';
import CompanyInfo from '../components/company/CompanyInfo';
import Reports from './Reports'
import Regist from './Regist'
import Login from './Login'
import Logout from './Logout'
import Error from './Error'

class CustomRoute extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Welcome user={this.props.user}/>} />
        <Route path='/comap' render={() => <CompanyWholeMap user={this.props.user} />} />
        <Route path='/coinfo' render={() => <CompanyInfo user={this.props.user} />} />
        <Route path='/report' render={() => <Reports user={this.props.user} />} />
        <Route path='/regist' render={() => <Regist user={this.props.user} setUser={this.props.setUser} />} />
        <Route path='/login' render={() => <Login user={this.props.user} setUser={this.props.setUser} />} />
        <Route path='/logout' render={() => <Logout user={this.props.user} setUser={this.props.setUser} />} />
        <Route path='/error' component={Error} />
	  </div>
    );
  }
}

export default CustomRoute;
