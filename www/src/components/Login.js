import React, { Component } from 'react';
import Resource from '../tools/Ajax';
import Cache from '../tools/Cache';
import { Container, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

import { Redirect } from 'react-router-dom'
class Login extends Component {
	
	componentWillMount(){
		this.setState({ page:'login', phone: '', pass: '', errorMsg: ''})
	}
	
	onLogin(e){
		e.preventDefault()
	    const { phone, pass } = this.state
	    if(phone != null && pass != null){
	    	Resource.login(phone, pass).then(res => {
	    		if(res.code === "OK"){
	    			Cache.setUser(res.data)
		    		this.props.setUser(res.data)
		    		this.setState({ page: '/' });
		    	}else{
		    		this.setState({ errorMsg: res.msg });
		    	}
	        }).catch(res => {this.setState({ errorMsg: res.statusText })});
	    }
	}
	
	onChange(e, { name, value }){
		this.setState({ [name]: value })
	}
	
	onRegist(e){
		e.preventDefault()
		this.setState({ page: 'regist' });
	}

	 render() {
		 if(this.state.page !== "login") return <Redirect to={this.state.page} />
		 const { phone, pass } = this.state
		 return (
			 <div className="minibody">
		    	<Message
				    error
				    hidden={this.state.errorMsg===""}
				    list={[this.state.errorMsg]}
				/>
			      <Container>
					 <div className='login-form'>
					      <Grid
					        textAlign='center'
					        style={{ height: '100%'}}
					        verticalAlign='middle'
					      >
					        <Grid.Column style={{ maxWidth: 450 }}>
					          <Header as='h2' color='teal' textAlign='center'>
                                                                                      無料で有料版をお試し頂くことが可能です。
                              </Header>
					          <Form size='large'>
					            <Segment stacked>
					              <Form.Input
					                fluid
					                icon='user'
					                iconPosition='left'
					                placeholder='電話番号'
					                name='phone' value={phone} onChange={this.onChange.bind(this)}
					              />
					              <Form.Input
					                fluid
					                icon='lock'
					                iconPosition='left'
					                placeholder='パスワード'
					                type='password'
					                name='pass' value={pass} onChange={this.onChange.bind(this)}
					              />

					              <Button color='teal' fluid size='large' onClick={this.onLogin.bind(this)}>今すぐ登録</Button>
					            </Segment>
					          </Form>
					          <Message>
					                              無料 <a href='#' onClick={this.onRegist.bind(this)}>お申込み</a>
					          </Message>
					        </Grid.Column>
					      </Grid>
					    </div>
				  </Container>
			</div>
		);
	}
}

export default Login;