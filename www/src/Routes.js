import React, { Component } from 'react';
import WdCustomerPage from './pages/WdCustomerPage'
import WdCompanyPage from './pages/WdCompanyPage'
import WdCocategoryPage from './pages/WdCocategoryPage'
import WdPagePage from './pages/WdPagePage'
import WdCotagPage from './pages/WdCotagPage'
import MstTagPage from './pages/MstTagPage'
import MstCategoryPage from './pages/MstCategoryPage'
import MstCorporationPage from './pages/MstCorporationPage'
import CustomRoute from './components/CustomRoute'
import {Route} from 'react-router-dom'
class Routes extends Component {
	render() {
		return (
			<div>
				<Route path='/customer' component={ WdCustomerPage } />
				<Route path='/company' component={ WdCompanyPage } />
				<Route path='/cocategory' component={ WdCocategoryPage } />
				<Route path='/page' component={ WdPagePage } />
				<Route path='/cotag' component={ WdCotagPage } />
				<Route path='/tag' component={ MstTagPage } />
				<Route path='/category' component={ MstCategoryPage } />
				<Route path='/corporation' component={ MstCorporationPage } />
				<CustomRoute user={this.props.user} setUser={this.props.setUser}/>
			</div>
		)
	}
}

export default Routes;