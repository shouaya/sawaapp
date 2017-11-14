import React, { Component } from 'react';
import MiniPage from '../tools/Page';
class WdCotagPage extends Component {
  
  render() {
    const column = [
          {"title":"会社ＩＤ", "name":"company_id", "type":"num", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"tagＩＤ", "name":"tag_id", "type":"num", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"点数", "name":"point", "type":"num", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"関連会社", "name":"company", "type":"obj", "ref":"company_id", "null":false, "unique":false ,"key": false }, 
          {"title":"関連tag", "name":"tag", "type":"obj", "ref":"tag_id", "null":false, "unique":false ,"key": false }, 
    ]
    
    return (
      <MiniPage
        title="会社tag"
        name="cotag" 
        table_name="wd_cotag" 
        column={column}
      />
    );
  }
}

export default WdCotagPage;
