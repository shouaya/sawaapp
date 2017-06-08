import React, { Component } from 'react';
import { Container, Segment, Form, Image, List} from 'semantic-ui-react'
class Online extends Component {

  constructor (props) {
	super(props)
    this.state = {webSocket: this.props.webSocket, to:{}}
	this.handleChange = (e, { name, value }) => this.setState({ [name]: value })
  }
  
  // 接続イベント
  onOpen(event) {
  	console.log("接続しました。");
  }

  // メッセージ受信イベント
  onMessage(event) {
    if (event && event.data) {
		let msg = JSON.parse(event.data);
		if(msg.type === "JOIN" || msg.type === "LEAVE"){
			this.props.onlineChange(msg.live)
		}
		console.log(msg)
	}
  }

  // エラーイベント
  onError(event) {
  	console.log("エラーが発生しました。");
  }

  // 切断イベント
  onClose(event) {
	this.setState({ webSocket: null })
  	console.log("切断しました。3秒後に再接続します。(" + event.code + ")");
  	setTimeout(this.openws.bind(this), 3000);
  }
  
  openws() {
	if (this.state.webSocket == null) {
		// WebSocket の初期化
		let webSocket = new WebSocket("ws://localhost:3000/ws/");
		// イベントハンドラの設定
		webSocket.onopen = this.onOpen.bind(this);
		webSocket.onmessage = this.onMessage.bind(this);
		webSocket.onclose = this.onClose.bind(this);
		webSocket.onerror = this.onError.bind(this);
		this.setState({ webSocket: webSocket })
	}
  }
  
  componentWillMount(){
	  let webSocket = this.state.webSocket;
	  webSocket.onopen = this.onOpen.bind(this);
	  webSocket.onmessage = this.onMessage.bind(this);
	  webSocket.onclose = this.onClose.bind(this);
	  webSocket.onerror = this.onError.bind(this);
	  this.setState({ webSocket: webSocket })
  }
  
  handleUserSelected(user){
	  this.setState({ to: user })
  }
  
  handleSubmit(e){
    e.preventDefault()
    const { to, txt } = this.state
    if(to != null && txt != null){
    	let msg = {};
    	msg.to = {id:to.id};
    	msg.content = txt;
    	this.state.webSocket.send(JSON.stringify(msg));
    	this.setState({ txt: "" })
    }
  }
  
  render() {
	let users = null
	if(this.props.users != null){
		users = this.props.users.map((user) =>
			<List.Item key={user.id} onClick={this.handleUserSelected.bind(this, user)}>
			  <Image avatar src={user.avatar} />
		    <List.Content>
		      <List.Header>{user.name}</List.Header>
		    </List.Content>
			</List.Item>
		);
	}
	const { to, txt } = this.state
    return (
	<Segment color='purple'>
      <Container>
	    <Form onSubmit={this.handleSubmit}>
	      <Form.Group>
	        <Image avatar src={to.avatar} />
	        <Form.Input placeholder='txt' name='txt' value={txt} onChange={this.handleChange.bind(this)} />
	        <Form.Button content='Submit' />
	      </Form.Group>
	    </Form>
	    <List selection verticalAlign='middle'>
		    {users}
		</List>
	  </Container>
	</Segment>
    );
  }
}

export default Online;
