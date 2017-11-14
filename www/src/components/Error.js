import React, { Component } from 'react';
import { Segment, Message, Divider, List, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
class Error extends Component {

	render() {
	    const code = window.location.search.replace("?code=", "")
	    const m401 = (
              <Message negative>
                <Message.Header>申し訳ございません。</Message.Header>
                <p>認証に失敗しました。</p>
                <Link to='/login' ><Button positive>再度ログインをお試しください。</Button></Link>
                <p>ご迷惑をお掛けしますが、よろしくお願い申し上げます。</p>
              </Message>
        )
	    const m403 = (
              <Message negative>
                <Message.Header>申し訳ございません。</Message.Header>
                <p>アクセスが禁止されています。</p>
                <p>問題が解決しない場合は、弊社までお問い合わせください。</p>
                <p>ご迷惑をお掛けしますが、よろしくお願い申し上げます。</p>
              </Message>
        )
	    const m404 = (
              <Message negative>
                <Message.Header>申し訳ございません。</Message.Header>
                <p>そんなページはありません。</p>
                <p>問題が解決しない場合は、弊社までお問い合わせください。</p>
                <p>ご迷惑をお掛けしますが、よろしくお願い申し上げます。</p>
              </Message>
        )
	    const m500 = (
	          <Message negative>
                <Message.Header>申し訳ございません。</Message.Header>
                <p>弊社の側に問題が発生しています。間もなく修正しますので、しばらくお待ちください。</p>
                <p>問題が解決しない場合は、弊社までお問い合わせください。</p>
                <p>ご迷惑をお掛けしますが、よろしくお願い申し上げます。</p>
              </Message>
	    )
	    const m000 = m500
	    const contact = (
	          <List>
	            <List.Item icon='users' content='株式会社イー・ビジネス' />
	            <List.Item icon='marker' content='〒 105-0014 東京都港区芝2-28-8芝2丁目ビル10階' />
	            <List.Item icon='call' content='Tel:03-6809-3235' />
	            <List.Item icon='fax' content='Fax:03-6809-3238' />
	            <List.Item icon='mail' content={<a href='mailto:info@e-business.co.jp'>info@e-business.co.jp</a>} />
	            <List.Item icon='linkify' content={<a href='https://www.e-business.co.jp'>e-business.co.jp</a>} />
	          </List>
	    )
	    const msg = (code) =>{
	        if(code === "401"){
	            return m401
	        }else if(code === "403"){
                return m403
	        }else if(code === "404"){
                return m404
            }else if(code === "500"){
	            return m500
	        }else{
	            return m000
	        }
	    }
	    
		return (
			  <div className="minibody">
				  <Segment color='red' stacked>
					  {msg(code)}
					  <Divider/>
					  {contact}
				  </Segment>
			  </div>
		);
	}
}

export default Error;