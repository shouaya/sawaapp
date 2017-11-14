import React, { Component } from 'react';
import Resource from '../tools/Ajax';
import Wait from './Wait';
import { Segment, Message,Form, Divider, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
class Regist extends Component {
	
	componentWillMount(){
		this.setState({ page:'regist', sei:'', mei:'', company:'', mail:'', phone:'', errorMsg: ''})
	}
	
	onChange(e, { name, value }){
		this.setState({ [name]: value })
	}
	
	onRegist(e){
		e.preventDefault()
		const { sei, mei, company, mail, phone } = this.state
		if(sei === "" || mei === "" || company === "" || mail === "" || phone === "") {
			this.setState({ seiE: sei === "", meiE: mei === "", companyE: company === "", mailE:mail === "", phoneE:phone === ""})
		}else{
			var user = {sei:sei, mei:mei, company:company, mail:mail, phone:phone}
			this.setState({isLoading:true},()=>{
				Resource.registWithUser(user).then(res => {
		    		if(res.code === "OK"){
			    		this.setState({ isLoading:false, page: '/login' });
			    	}else{
			    		this.setState({ isLoading:false, errorMsg: res.msg });
			    	}
		        }).catch(res => {this.setState({ isLoading:false, errorMsg: res.statusText })});
			})
		}
	}
	
	render() {
		if(this.state.isLoading) return <Wait />
		if(this.state.page !== "regist") return <Redirect to={this.state.page} />
		const { sei, mei, company, mail, phone } = this.state
		const { seiE, meiE, companyE, mailE, phoneE } = this.state
		return (
		  <div className="minibody">
			<Message
			    error
			    hidden={this.state.errorMsg===""}
			    list={[this.state.errorMsg]}
			/>
			  <Segment color='blue' stacked>
				  <Message positive>
				    <Message.Header>無料トライアルのお申込み</Message.Header>
				    <p>無料で有料版をお試し頂くことが可能です。</p>
				  </Message>
				  <Form　 size={'large'}>
				    <Form.Field required>
				      <label>名前</label>
				      <Form.Group>
				      <Form.Input placeholder='姓' error={seiE} width={2} name='sei' value={sei} onChange={this.onChange.bind(this)} />
				      <Form.Input placeholder='名' error={meiE} width={4} name='mei'  value={mei} onChange={this.onChange.bind(this)} />
				      </Form.Group>
				    </Form.Field>
				    <Form.Field required>
				      <label>会社名</label>
				      <Form.Input placeholder='会社名' error={companyE} width={6} name='company' value={company} onChange={this.onChange.bind(this)} />
				    </Form.Field>
				    <Form.Field required>
				      <label>メールアドレス</label>
				      <Form.Input placeholder='メールアドレス' error={mailE} width={6} name='mail' value={mail} onChange={this.onChange.bind(this)} />
				    </Form.Field>
				    <Form.Field required>
				      <label>電話番号</label>
				      <Form.Input placeholder='電話番号' error={phoneE} width={6} name='phone' value={phone} onChange={this.onChange.bind(this)} />
				    </Form.Field>
				    <Divider />
				    <Form.Field>
				      <label>この先続行することで個人情報保護方針および利用規約に同意し、アントレペディアへのユーザー登録を行うものとします。</label>
				    </Form.Field>
				    <Form.Field>
				      <Button size='big' color='teal' onClick={this.onRegist.bind(this)}>無料トライアルを試してみる</Button>
				    </Form.Field>
				  </Form>
			  </Segment>
		  </div>
		)
	}
}

export default Regist;