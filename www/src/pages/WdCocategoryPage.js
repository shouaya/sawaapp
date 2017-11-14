import React, { Component } from 'react';
import MiniPage from '../tools/Page';
class WdCocategoryPage extends Component {
  
  render() {
    const column = [
          {"title":"会社ＩＤ", "name":"company_id", "type":"num", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"優先", "name":"priority", "type":"num", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"分類ＩＤ", "name":"category_id", "type":"num", "ref":"", "null":true, "unique":false ,"key": false }, 
          {"title":"関連会社", "name":"company", "type":"obj", "ref":"company_id", "null":false, "unique":false ,"key": false }, 
          {"title":"関連業界分類", "name":"category", "type":"obj", "ref":"category_id", "null":false, "unique":false ,"key": false }, 
    ]
    
    return (
      <MiniPage
        title="会社業種"
        name="cocategory" 
        table_name="wd_cocategory" 
        column={column}
      />
    );
  }
}

export default WdCocategoryPage;
