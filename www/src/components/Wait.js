import React, { Component } from 'react';
import { Message,Icon } from 'semantic-ui-react'
class Wait extends Component {
	 render() {
		return (
			<div className={'minibody'}>
			  <Message icon>
			    <Icon name='circle notched' loading />
			    <Message.Content>
			    <Message.Header>しばらくお待ちください。</Message.Header>
			      処理が完了して結果が表示されるまでウェブブラウザの操作（再読み込み、読み込みの
			      中止、ウインドウを閉じるなど）はせずにそのままお待ちください。
			    </Message.Content>
			  </Message>
			</div>
		);
	}
}
export default Wait;