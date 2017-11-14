import React, { Component } from 'react';
import { Button, Input, Dropdown } from 'semantic-ui-react'

class PageFilter extends Component {

  componentWillMount(){
	const {sName, sValue, sTitle, sType} = this.props.search
	this.setState({ sError:false, sName:sName, sValue:sValue, sTitle:sTitle, sType:sType})
  }
	
  handleFilterChange(e){
	this.setState({ sValue:e.target.value})
  }
  
  handleFilter(e){
	const defaultQuery = {name: this.props.table_name, limit: 10, offset: 0}
	const {sName, sValue, sTitle, sType} = this.state
	const search = {sName:sName, sValue:sValue, sTitle:sTitle, sType:sType}
	if(this.state.sValue === undefined || this.state.sValue === ""){
		this.props.refresh(defaultQuery, search)
		return
	}
	if(this.state.sName  === undefined || this.state.sName === ""){
		this.props.refresh(defaultQuery, search)
		return
	}
	let query = {name: this.props.table_name, limit: 10, offset: 0}
	query.name = this.props.table_name + "-" + this.state.sName
	if(this.state.sType === "txt"){
		query.params = [{ "key": this.state.sName, "value": '%' + this.state.sValue.trim() +'%'}]
	}else if(this.state.sType === "num"){
		var reg = new RegExp("^[0-9]*$");
		if(!reg.test(this.state.sValue)){
			this.setState({ sError:true })
			return;
	    }
		query.params = [{ "key": this.state.sName, "value": this.state.sValue.trim()}]
	}
	
	this.props.refresh(query, search)
  }
  
  handleSearchItemChange(item, e){
	this.setState({ sName:item.name, sTitle:item.title, sType:item.type })
  }

  render() {
    const dropdownList = this.props.column.map((item) => {
        if(item.type === "obj" || item.type === "list") return null
    	return (
			<Dropdown.Item key={item.name} onClick={this.handleSearchItemChange.bind(this, item)}>
			    	{item.title}
			</Dropdown.Item>
    	)
    });
    return (
	  <Input type='text' placeholder='Search...' error={this.state.sError} action inverted onChange={this.handleFilterChange.bind(this)} value={this.state.sValue}>
	  	<input />
	      <Dropdown text={this.state.sTitle} icon='filter' floating labeled button className='icon'>
		    <Dropdown.Menu>
		      {dropdownList}
		    </Dropdown.Menu>
		  </Dropdown>
	    <Button type='submit' onClick={this.handleFilter.bind(this)}>Search</Button>
	  </Input>
    );
  }
}

export default PageFilter;
