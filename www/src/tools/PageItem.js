import React, { Component } from 'react';
import { Segment, Label, Header, Modal, Icon, Button, Input, TextArea } from 'semantic-ui-react'
import SearchItem from '../components/SearchItem';

class PageItem extends Component {
	render() {
		if(!this.props.modalOpen) return null
		const icon = (col) =>{
	    	if(!col.null) return <Icon name='asterisk' color='red' /> 
	    	return null
	    }
		const error = (col) =>{
			if(this.props.error){
				if(this.props.error[col]){
				  return true
				}else{
				  return false
				}
			}
			return false
		}
		const segmentItems = this.props.column.map((col) => {
			if(col.type === "obj" || col.type === "list") return null
		    return (
		      <Segment padded key={col.name}>
		        <Label attached='top left' >{col.title}{icon(col)}</Label>
		        {(() => {
		          const currentValue = this.props.currentItem[col.name] === null ? "" : this.props.currentItem[col.name] + "";
		          if (this.props.action === "view"){
		            return <Segment padded>{ currentValue }</Segment>
		          }else if(this.props.action === "create"){
		            if(col.name.endsWith("_id")){
		            	return <div className={error(col.name)?"ui error input":"ui input"}><SearchItem
		            	col={col.name} 
		            	onSearchChange={ this.props.onItemSearchChange.bind(this, col.name) } /></div>
		            }
		            return <Input error={error(col.name)} onChange={ this.props.onItemValueChange.bind(this, col.name) }/>
		          }else if(this.props.action === "edit"){
		            if(col.name.endsWith("_id")){
		            	return <div className={error(col.name)?"ui error input":"ui input"}><SearchItem 
		            	col={col.name} 
		            	onSearchChange={ this.props.onItemSearchChange.bind(this, col.name) } 
		            	value={currentValue}/></div>
		            }
		            if(currentValue.length > 30){
		                return <TextArea value={ currentValue } error={error(col.name)} 
		                onChange={ this.props.onItemValueChange.bind(this, col.name)} 
		                style={{ minHeight: 100, mingWeight: 200 }} />
		            }
		            return <Input
		              value={ currentValue } 
		              error={error(col.name)}
		              onChange={ this.props.onItemValueChange.bind(this, col.name) }/>
		          }
		        })()}
		      </Segment>
		   )
	    });
		return (
			<Modal
			  open={true}
			  onClose={this.props.onClose}
			  size='small'
			>
			  <Header icon='browser' content={this.props.title + ':' + this.props.currentItem.id} />
			  <Modal.Content>
			    <Segment.Group>
			      {segmentItems}
			    </Segment.Group>
			  </Modal.Content>
			  <Modal.Actions>
			    <Button onClick={this.props.onClose.bind(this, true)} positive>
			      <Icon name='checkmark' /> Finish
			    </Button>
			      </Modal.Actions>
			</Modal>
		);
	}
}
export default PageItem;