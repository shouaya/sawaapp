import React, { Component } from 'react';
import MiniPage from '../tools/Page';
class WdPagePage extends Component {
  
  render() {
    const column = [
          {"title":"会社ＩＤ", "name":"company_id", "type":"num", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"優先", "name":"priority", "type":"num", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"ページタイトル", "name":"title", "type":"txt", "ref":"", "null":false, "unique":false ,"key": true }, 
          {"title":"ページURL", "name":"url", "type":"txt", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"関連会社", "name":"company", "type":"obj", "ref":"company_id", "null":false, "unique":false ,"key": false }, 
    ]
    
    return (
      <MiniPage
        title="会社ページ"
        name="page" 
        table_name="wd_page" 
        column={column}
      />
    );
  }
}

export default WdPagePage;
