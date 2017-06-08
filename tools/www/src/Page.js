import React, { Component } from 'react';
import Resource from './Ajax.js';
import Pagination from './Pagination.js';
import {Table, Button, Segment, Header, Icon, Modal, Input, Label } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class MiniPage extends Component {
	
  constructor (props) {
	super(props)
    this.state = {list: [], modalOpen: false, currentItem: {}, action: '', totalPage:1, currentPage:1, isLoading:true };
	this.handleItemView = (item) => this.setState({
	    modalOpen: true,
	    currentItem : item,
	    action : 'view'
	})
	  
	this.handleItemEdit = (item) => this.setState({
	    modalOpen: true,
	    currentItem : item,
	    action : 'edit'
	})
	  
	this.handleItemDelete = (item) => {
	    if(confirm('Delete the item?')) {
	      Resource.remove(this.props.name, item.id).then(data => {
	        this.getList(this.state.currentPage);
	      });
	    }
	}

	this.handleItemCreate = () => {
	    this.setState({
	      modalOpen: true,
	      currentItem : {id:0},
	      action : 'create'
	    })
	}
	      
	this.handleItemClose = (isSave) => {
	    if(isSave === true && (
	        this.state.action === "create" || this.state.action === "edit")
	    ){
	      Resource.save(this.props.name, this.state.currentItem).then(data => {
	        this.getList(this.state.currentPage);
	      });
	    }else{
	      this.getList(this.state.currentPage);
	    }
	}
	  
	this.handleItemChange = (pro, e, data) => {
	    let item = this.state.currentItem
	    item[pro] = data.value
	    this.setState({
	      currentItem: item,
	    })
	}
	  
	this.handlePageClick = (pageNo) =>{
	    this.getList(pageNo);
	}
  }
  
  getList(pageNo){
    let query = {name: this.props.table_name, limit: 10, offset: (pageNo-1)*10}
    if(this.props.search !== ""){
      let array  = this.props.search.slice(1).split('=')
      query.name = this.props.table_name + "-" + array[0]
      query.params = [{ "key": array[0], "value": array[1]}]
    }
    Resource.list(this.props.name, query).then(res => {
      this.setState({
        modalOpen: false,
        list: res.data,
        totalPage: Math.ceil(res.total/10),
        currentPage: pageNo,
        isLoading: false
      })
    })
  }
  
  componentWillMount(){
    this.getList(this.state.currentPage);
  }
  
  render() {
    if(this.state.isLoading) return null
    const renderRow = (row) => {
    	return this.props.column.map((item) => {
	    	if (item.type === "obj"){
	            return <Table.Cell key={row.id + item.name}><Link to={'/' + item.name + '?id=' + row[item.ref] }><Button icon='linkify'/></Link></Table.Cell>
	        }else if(item.type === "list"){
	            return <Table.Cell key={row.id + item.name}><Link to={'/' + item.name + '?' + item.ref + '=' + row.id }><Button icon='list'/></Link></Table.Cell>
	        }else{
	            return <Table.Cell key={row.id + item.name}>{ row[item.name] }</Table.Cell>
	        }
	    })
    };
    const listItems = this.state.list.map((item) =>
      <Table.Row key={item.id}>
        <Table.Cell collapsing>
          <Button.Group basic size='small'>
            <Button icon='list' onClick={this.handleItemView.bind(this, item)}/>
            <Button icon='edit' onClick={this.handleItemEdit.bind(this, item)}/>
            <Button icon='delete' onClick={this.handleItemDelete.bind(this, item)}/>
          </Button.Group>
        </Table.Cell>
          {renderRow(item)}
      </Table.Row>
    );

    const cnt = 10 - listItems.length;
    if(listItems.length < 10){
      for(var i=0;i<cnt;i++){
        listItems.push(<Table.Row key={"dummy"+i}><Table.Cell><Button icon='minus'/></Table.Cell></Table.Row>)
      }
    }
    
    const segmentItems = this.props.column.map((item) => {
    if(item.type === "obj" || item.type === "list") return null
    return (
      <Segment padded key={item.name}>
        <Label attached='top left'>{item.title}</Label>
        {(() => {
          if (this.state.action === "view"){
            return <Segment padded>{ this.state.currentItem[item.name] }</Segment>
          }else if(this.state.action === "create"){
            return <Input
            onChange={ this.handleItemChange.bind(this, item.name) }/>
          }else if(this.state.action === "edit"){
            return <Input
              value={ this.state.currentItem[item.name] } 
              onChange={ this.handleItemChange.bind(this, item.name) }/>
          }
        })()}
      </Segment>
      )
    });
    const header = this.props.column.map((item) => {
    	return (<Table.HeaderCell key={item.name}>{item.title}</Table.HeaderCell>)
    });
    return (
    <Segment color='blue'>
      <Table basic='very' celled collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell><Label as='a' color='teal' ribbon>{this.props.title}</Label></Table.HeaderCell>
           {header}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {listItems}
      </Table.Body>
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell>
            <Button floated='right' icon labelPosition='left' primary size='small'
              onClick={this.handleItemCreate.bind(this)}>
              new
            </Button>
          </Table.HeaderCell>
          <Table.HeaderCell colSpan='20'>
            <Pagination 
              pageNo={this.state.currentPage}
              pageCount={this.state.totalPage} 
              onPageChange={this.handlePageClick} />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    <Modal
      open={this.state.modalOpen}
      onClose={this.handleItemClose}
      size='small'
    >
      <Header icon='browser' content={this.props.title + ':' + this.state.currentItem.id} />
      <Modal.Content>
        <Segment.Group>
          {segmentItems}
        </Segment.Group>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={this.handleItemClose.bind(this, true)} positive>
          <Icon name='checkmark' /> Finish
        </Button>
      </Modal.Actions>
    </Modal>
    </Segment>
    );
  }
}

export default MiniPage;
