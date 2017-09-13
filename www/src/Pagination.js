import React, { Component } from 'react';
import { Menu, Icon, Input } from 'semantic-ui-react'

class Pagination extends Component {
  
  constructor (props) {
	super(props)
    this.state = {totalPage: 0, currentPage: 1, show: false, inputPage: 1};
  }
  
  componentWillMount(){
	if(this.props.pageCount > 1){
		this.setState({
		  totalPage: this.props.pageCount,
		  currentPage : this.props.pageNo,
		  show : true
	    })
	}
  }
  
  handlePageClick(action){
	  if(action === "left"){
		  let pageNo = parseInt(this.state.currentPage, 10) - 1
		  if(this.state.currentPage - 1 <= 0){
			  pageNo = this.state.currentPage
			  return
		  }
		  this.setState({
			  currentPage : pageNo,
		  },function () {
			  this.props.onPageChange(this.state.currentPage);
		  })
	  }else if(action === "right"){
		  let pageNo = parseInt(this.state.currentPage, 10) + 1
		  console.log(pageNo)
		  if(this.state.currentPage + 1 > this.state.totalPage){
			  pageNo = this.state.totalPage
			  return
		  }
		  
		  this.setState({
			  currentPage : pageNo,
		  },function () {
			  
			  this.props.onPageChange(this.state.currentPage);
		  })
	  }else{
		  this.setState({
			  currentPage : action,
		  },function () {
			  this.props.onPageChange(this.state.currentPage);
		  })
	  }
  }
  handlePageNoChange(event){
	  this.setState({
		  inputPage : event.target.value
	  })
  }
  handlePageChange(event){
	  window.location.hash = "#page=" + this.state.inputPage
	  this.setState({
		  currentPage : parseInt(this.state.inputPage, 10),
	  },function () {
		  this.props.onPageChange(this.state.currentPage);
	  })
  }
  
  render() {
	if(!this.state.show) return null
	const items = [];
	if(this.state.totalPage > 5){
		// page 1
		items.push(<Menu.Item as='a' 
			active={1 === this.state.currentPage} 
			key={1}
			onClick={this.handlePageClick.bind(this, 1 )}
		>1</Menu.Item>)
		if(this.state.currentPage <= 2){
			// case 1
			items.push(<Menu.Item as='a' 
				active={2 === this.state.currentPage} 
				key={2}
				onClick={this.handlePageClick.bind(this, 2 )}
			>2</Menu.Item>)
			items.push(<Menu.Item as='a' key={0}>...</Menu.Item>)
		}else if(this.state.currentPage >= this.state.totalPage - 1){
			// case 2
			items.push(<Menu.Item as='a' key={0}>...</Menu.Item>)
			items.push(<Menu.Item as='a' 
				active={this.state.totalPage - 1 === this.state.currentPage} 
				key={this.state.totalPage - 1}
				onClick={this.handlePageClick.bind(this, this.state.totalPage - 1 )}
			>{this.state.totalPage - 1}</Menu.Item>)
		}else{
			// case 3
			items.push(<Menu.Item as='a' key={-1}>...</Menu.Item>)
			items.push(<Menu.Item as='a' 
				active={true} 
				key={this.state.currentPage}
				onClick={this.handlePageClick.bind(this,this.state.currentPage )}
			>{this.state.currentPage}</Menu.Item>)
			items.push(<Menu.Item as='a' key={-2}>...</Menu.Item>)
		}
		// page end
		items.push(<Menu.Item as='a' 
			active={this.state.totalPage === this.state.currentPage} 
			key={this.state.totalPage}
			onClick={this.handlePageClick.bind(this, this.state.totalPage )}
		>{this.state.totalPage}</Menu.Item>)
	}else{
		for (var i=0; i < this.state.totalPage; i++) {
			items.push(<Menu.Item as='a' 
				active={i+1 === this.state.currentPage} 
				key={i}
				onClick={this.handlePageClick.bind(this, i+1 )}
			>{i+1}</Menu.Item>);
		}
	}
    return (
    <Menu pagination>
        <Menu.Item as='a' icon onClick={this.handlePageClick.bind(this, "left")}>
          <Icon name='left chevron' />
        </Menu.Item>
        {items}
        <Menu.Item as='a' icon onClick={this.handlePageClick.bind(this, "right")}>
          <Icon name='right chevron' />
        </Menu.Item>
        <Menu.Item icon >
          <Input size='mini' value={this.state.inputPage} 
          		placeholder='goto page' 
          		onChange={this.handlePageNoChange.bind(this)} 
                action={{ icon: 'right chevron', onClick:this.handlePageChange.bind(this)}} />
        </Menu.Item>        
      </Menu>
    );
  }
}

export default Pagination;
