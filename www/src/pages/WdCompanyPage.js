import React, { Component } from 'react';
import MiniPage from '../tools/Page';
class WdCompanyPage extends Component {
  
  render() {
    const column = [
          {"title":"商号ＩＤ", "name":"corporation_id", "type":"num", "ref":"", "null":true, "unique":false ,"key": false }, 
          {"title":"会社名", "name":"name", "type":"txt", "ref":"", "null":false, "unique":false ,"key": true }, 
          {"title":"ロマ字", "name":"roma", "type":"txt", "ref":"", "null":true, "unique":false ,"key": false }, 
          {"title":"設立年月日", "name":"buildDate", "type":"txt", "ref":"", "null":true, "unique":false ,"key": false }, 
          {"title":"資本金", "name":"capital", "type":"txt", "ref":"", "null":true, "unique":false ,"key": false }, 
          {"title":"業務", "name":"business", "type":"txt", "ref":"", "null":true, "unique":false ,"key": false }, 
          {"title":"関連業種", "name":"cocategory", "type":"list", "ref":"company_id", "null":false, "unique":false ,"key": false }, 
          {"title":"関連ページ", "name":"page", "type":"list", "ref":"company_id", "null":false, "unique":false ,"key": false }, 
          {"title":"商号情報", "name":"corporation", "type":"obj", "ref":"corporation_id", "null":false, "unique":false ,"key": false }, 
    ]
    
    return (
      <MiniPage
        title="会社"
        name="company" 
        table_name="wd_company" 
        column={column}
      />
    );
  }
}

export default WdCompanyPage;
