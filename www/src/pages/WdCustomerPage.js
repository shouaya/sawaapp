import React, { Component } from 'react';
import MiniPage from '../tools/Page';
class WdCustomerPage extends Component {
  
  render() {
    const column = [
          {"title":"ユーザーＩＤ", "name":"user_id", "type":"num", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"姓", "name":"sei", "type":"txt", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"名", "name":"mei", "type":"txt", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"会社名", "name":"company", "type":"txt", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"メールアドレス", "name":"mail", "type":"txt", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"電話番号", "name":"phone", "type":"txt", "ref":"", "null":false, "unique":true ,"key": false }, 
          {"title":"ユーザー情報", "name":"user", "type":"obj", "ref":"user_id", "null":false, "unique":false ,"key": false }, 
    ]
    
    return (
      <MiniPage
        title="顧客"
        name="customer" 
        table_name="wd_customer" 
        column={column}
      />
    );
  }
}

export default WdCustomerPage;
