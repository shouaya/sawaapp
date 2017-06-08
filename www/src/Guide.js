import React, { Component } from 'react';
import { Container, Segment, Form, Step, Divider, Header, Modal, Icon, Button, Label, Input, Loader} from 'semantic-ui-react'
import Resource from './Ajax.js';
class Guide extends Component {

  constructor (props) {
	super(props)
	
    this.state = {phone: '', pass: ''}

	this.handleChange = (e, { name, value }) => this.setState({ [name]: value })
	
	this.handleLogin = e => {
	    e.preventDefault()
	    const { phone, pass } = this.state
	    if(phone != null && pass != null){
	    	Resource.login(phone, pass).then(data => {
	        	this.props.onLogin(data)
	        });
	    }
	}
	
	this.handleRegist = e => {
	    e.preventDefault()
	    this.setState({ modalOpen: true })
	}
	
	this.handleModalClose = (isSave, e) => {
	    if(isSave === true){
	      this.setState({ registed: true })
	      Resource.regist(this.state.phone).then(data => {
	        this.setState({ modalOpen: false, registed:false })
	      });
	    }else{
	      this.setState({ modalOpen: false })
	    }
	}
  }
  
  render() {
    if(this.props.login) return (
      <Step.Group>
        <Step completed icon='payment' title='success' description={'welcome'} />
      </Step.Group>
    )
	const { phone, pass } = this.state
    return (
	<div className="body">
		<Header as='h1'>KPF</Header>
		<Divider />
		<Segment color='yellow'>
	      <Container>
		    <Form onSubmit={this.handleLogin}>
		      <Form.Group>
		        <Form.Input placeholder='phone' name='phone' value={phone} onChange={this.handleChange.bind(this)} />
		        <Form.Input placeholder='pass' name='pass' value={pass} onChange={this.handleChange.bind(this)} />
		        <Form.Button content='Login' /> <Button primary onClick={this.handleRegist.bind(this)}>regist</Button>
		      </Form.Group>
		    </Form>
		    
		  </Container>
		</Segment>
		<Modal
	      open={this.state.modalOpen}
	      onClose={this.handleModalClose}
	      size='small'
	    >
	      <Header icon='browser' content='get regist pass'/>
	      <Modal.Content>
	        <Segment padded>
	        	<Label attached='top left'>phone number</Label>
	        	<Input name='phone' onChange={ this.handleChange.bind(this) }/>
	        </Segment>
	        <Loader />
	      </Modal.Content>
	      <Modal.Actions>
	        <Button loading={this.state.registed} onClick={this.handleModalClose.bind(this, true)} positive>
	          <Icon name='checkmark' /> Regist
	        </Button>
	      </Modal.Actions>
	    </Modal>
	</div>
    );
  }
}

export default Guide;
