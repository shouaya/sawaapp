import React, { Component } from 'react';
import Resource from './Ajax';
import Cache from './Cache';
import Wait from '../components/Wait';
import PageFilter from './PageFilter';
import PageTable from './PageTable';
import { Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class MiniPage extends Component {
	
  constructor (props) {
	super(props)
	let page = window.location.hash.replace("#page=","")
	if(page !== ""){
		this.state = { currentPage:parseInt(page, 10), list:[] , query:{}}
	}else{
		this.state = { currentPage:1, list:[] , query:{}}
	}
  }
  
  componentWillMount(){
	let query = {name: this.props.table_name, limit: 10, offset: (this.state.currentPage - 1 )*10}
    if(window.location.search !== ""){
        let array  = window.location.search.slice(1).split('=')
        query.name = this.props.table_name + "-" + array[0]
        query.params = [{ "key": array[0], "value": decodeURIComponent(array[1])}]
    }

    this.refresh(query, { sName:"", sTitle:"", sType:"", sValue:"" }, this.state.currentPage)
  }
  
  refresh(query, search, pageNo=1){
    this.setState({isLoading:true},()=>{
    	Resource.list(this.props.name, query).then(res => {
	      this.setState({
	        list: res.data,
	        totalPage: Math.ceil(res.total/10),
	        isLoading: false,
	        query:query,
	        search:search,
	        currentPage:pageNo
	      })
	    }).catch(res => { 
	    	this.setState({isLoading: false, error: true, errorCode: res.status})
	    })
    })
  }
  
  saveItem(item){
    this.setState({isLoading:true},()=>{
	  Resource.save(this.props.name, item).then(data => {
	    this.refresh(this.state.query, this.state.search)
	  }).catch(res => {  this.setState({isLoading: false, error: true, errorCode: res.status}) })
    })
  }
  
  deleteItem(item){
    this.setState({isLoading:true},()=>{
	  Resource.remove(this.props.name, item.id).then(data => {
        this.refresh(this.state.query, this.state.search)
      }).catch(res => {  this.setState({isLoading: false, error: true, errorCode: res.status}) })
    })
  }

  render() {
	if(this.state.isLoading) return <Wait />
	if(this.state.error) return <Redirect to={"/error?code=" + this.state.errorCode } />
	let user = Cache.getUser()
    const admin = user.role === "ADMIN"
    return (
    <div className={'minibody'}>
		<Segment className={'minsearch'} inverted>
			<PageFilter 
				refresh={this.refresh.bind(this)} 
				column={this.props.column} 
				table_name={this.props.table_name} 
				search={this.state.search}
			/>
		</Segment>
		<Segment>
			<PageTable 
				admin={admin} 
			    name={this.props.name}
				list={this.state.list} 
				column={this.props.column} 
				title={this.props.title} 
				currentPage={this.state.currentPage} 
				totalPage={this.state.totalPage}
				query={this.state.query}
				search={this.state.search}
				refresh={this.refresh.bind(this)}
				saveItem={this.saveItem.bind(this)}
				deleteItem={this.deleteItem.bind(this)}
			/>
		</Segment>
	  </div>
    );
  }
}

export default MiniPage;
