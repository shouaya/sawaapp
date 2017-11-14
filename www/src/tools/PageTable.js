import React, { Component } from 'react';
import { Table, Button, Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Validate from './Validate'
import PageItem from './PageItem'
import Pagination from '../components/Pagination'
class PageTable extends Component {

  componentWillMount(){
	this.setState({ list: this.props.list, modalOpen:false, currentItem:{}})
  }

  handleItemView(item){
	let currentItem = Object.assign({}, item)
	this.setState({
	    modalOpen: true,
	    currentItem : currentItem,
	    action : 'view'
	})
  }

  handleItemEdit(item, e){
	let currentItem = Object.assign({}, item)  
	this.setState({
	    modalOpen: true,
	    currentItem : currentItem,
	    action : 'edit'
	})
  }
  
  handleItemDelete(item, e){
    if(confirm('Delete the item?')) {
      this.props.deleteItem(item)
    }
  }

  handleItemCreate(e){
    this.setState({
      modalOpen: true,
      currentItem : {id:0},
      action : 'create'
    })
  }
  
  onItemSearchChange(pro, data){
    let item = this.state.currentItem
    item[pro] = data
    this.setState({
    	currentItem: item
    })
  }

  onItemValueChange(pro, e, data){
	let item = this.state.currentItem
    item[pro] = data.value
    this.setState({
      currentItem: item
    })
  }

  handlePageClick(pageNo){
　　　 window.location.hash = "#page=" + pageNo
	let query = this.props.query 
	query.offset = (pageNo - 1 )*10
	this.props.refresh(query, this.props.search, pageNo)
  }
  
  handleItemClose(isSave, e){
	if(isSave === true && (
    	this.state.action === "create" || this.state.action === "edit")
    ){
      let error = Validate.validate(this.props.column, this.state.currentItem);
      if(error.hasError){
    	  this.setState({error: error})
    	  return
      }
      this.props.saveItem(this.state.currentItem)
    }else{
      this.setState({ modalOpen: false, error:null})
    }
  }
  
　  render() {
	const renderRow = (row) => {
    	return this.props.column.map((item) => {
	    	if (item.type === "obj"){
	    		if(row[item.ref]){
	            	return <Table.Cell key={row.id + item.name}><Link to={'/' + item.name + '?id=' + row[item.ref] }><Button icon='linkify'/></Link></Table.Cell>
	            }else{
	            	return <Table.Cell key={row.id + item.name}></Table.Cell>
	            }
	        }else if(item.type === "list"){
	        	if(row.id && row[item.name].length >= 1){
	        		if(row[item.name][0].url){
	        			return (
	        				<Table.Cell key={row.id + item.name}>
	        					<Link to={'/' + item.name + '?' + item.ref + '=' + row.id }>
	        						<Button icon='list'/>
	        					</Link>
	        					<a　href={row[item.name][0].url} target='_blank'>
	        						<Button icon='share' />
	        					</a>
	        				</Table.Cell>		
	        			)
	        		}
	            	return(
	            		<Table.Cell key={row.id + item.name}>
	            			<Link to={'/' + item.name + '?' + item.ref + '=' + row.id }>
	            				<Button icon='list'/>
	            			</Link>
	            		</Table.Cell>
	            	)
	            }else{
	            	return <Table.Cell key={row.id + item.name}></Table.Cell>
	            }
	        }else{
	            if(row[item.name] != null){
	                if( row[item.name].length > 30){
	                    return <Table.Cell key={row.id + item.name} ><p className='minicell'>{ row[item.name] }</p></Table.Cell>
	                }
	            }
	            return <Table.Cell key={row.id + item.name} >{ row[item.name] }</Table.Cell>
	        }
	    })
    };
	const listItems = this.state.list.map((item) =>
      <Table.Row key={item.id}>
        <Table.Cell collapsing>
          <Button.Group basic size='small'>
            <Button icon='list' onClick={this.handleItemView.bind(this, item)}/>
            <Button style={ {display: this.props.admin ? 'block' : 'none'} } icon='edit' onClick={this.handleItemEdit.bind(this, item)}/>
            <Button style={ {display: this.props.admin ? 'block' : 'none'} } icon='delete' onClick={this.handleItemDelete.bind(this, item)}/>
          </Button.Group>
        </Table.Cell>
          {renderRow(item)}
      </Table.Row>
    );
    const header = this.props.column.map((item) => {
    	return (<Table.HeaderCell key={item.name}>{item.title}</Table.HeaderCell>)
    });
	return (
	  <div>
		<Table basic='very' celled collapsing selectable>
		  <Table.Header>
		    <Table.Row>
		      <Table.HeaderCell><Label color='blue' ribbon >{this.props.title}</Label></Table.HeaderCell>
		       {header}
		    </Table.Row>
		  </Table.Header>
		  <Table.Body>
		    {listItems}
		  </Table.Body>
		  <Table.Footer fullWidth>
		    <Table.Row>
		      <Table.HeaderCell>
		        <Button style={ {display: this.props.admin ? 'block' : 'none'} } floated='right' icon labelPosition='left' primary size='small'
		          onClick={this.handleItemCreate.bind(this)}>
		          <Icon name='plus' /> new
		        </Button>
		      </Table.HeaderCell>
		      <Table.HeaderCell colSpan='10'>
		        <Pagination 
		          pageNo={this.props.currentPage}
		          pageCount={this.props.totalPage} 
		          onPageChange={this.handlePageClick.bind(this)} />
		      </Table.HeaderCell>
		    </Table.Row>
		  </Table.Footer>
		</Table>
		<PageItem 
		  title={this.props.title}
		  currentItem={this.state.currentItem}
		  column={this.props.column}
		  action={this.state.action}
		  error={this.state.error}
		  modalOpen={this.state.modalOpen}
		  onItemSearchChange={this.onItemSearchChange.bind(this)}
		  onItemValueChange={this.onItemValueChange.bind(this)}
		  onClose={this.handleItemClose.bind(this)} />
	  </div>
	);
　}
}
export default PageTable;