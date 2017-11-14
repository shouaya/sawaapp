import React, { Component } from 'react';
import './App.css';
import Cache from './tools/Cache';
import Routes from './Routes';
import Toolbar from './Toolbar';
import {
  BrowserRouter as Router,
  Redirect,Link,Switch
} from 'react-router-dom'
import { Divider, Header, Segment, Image } from 'semantic-ui-react'

class App extends Component {  
  
  componentWillMount(){
	  this.setState({ login:false })
	  let user = Cache.getUser()
      if(user !== null){
    	  this.setState({ user: user, page:"/" })
      }else{
    	  this.setState({ page:"/login" })
      }
  }
  
  setUser(user){
	  this.setState({ user: user })
  }
  
  render() {
	const user = this.state.user
	const toolbar = <Toolbar user={user} setUser={this.setUser.bind(this)}/>
	return (
		<Router>
		    <div>
		    <Header className="miniheader">
				<Link to='/'>
					&nbsp;&nbsp;&nbsp;
					<Image src='http://st.whaledata.jp/whale64.png' size='tiny' wrapped verticalAlign='bottom'/>
					<span className="minititle">クジラ・データ</span>
				</Link>
				<Divider />
				<Segment inverted className="minimenu">
					{toolbar}
		        </Segment>
		    </Header>
		    <Switch>
		    <Routes user={user} setUser={this.setUser.bind(this)} />
		    <Redirect to={{ pathname: this.state.page, state: { from: this.props.location } }}/>
		    </Switch>
			<div className="footer">
				<p className="footer__text">Copyright © 2007-2017 E-Business Corporation. All Rights Reserved.</p>
			</div>
		 </div>
	   </Router>
    );
  }
}

export default App;
