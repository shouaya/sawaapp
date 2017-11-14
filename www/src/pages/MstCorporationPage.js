import React, { Component } from 'react';
import MiniPage from '../tools/Page';
class MstCorporationPage extends Component {
  
  render() {
    const column = [
          {"title":"商号番号", "name":"corporateNumber", "type":"txt", "ref":"", "null":false, "unique":true ,"key": false }, 
          {"title":"商号名", "name":"name", "type":"txt", "ref":"", "null":false, "unique":false ,"key": true }, 
          {"title":"住所", "name":"address", "type":"txt", "ref":"", "null":true, "unique":false ,"key": false }, 
          {"title":"緯度", "name":"lat", "type":"txt", "ref":"", "null":true, "unique":false ,"key": false }, 
          {"title":"経度", "name":"lng", "type":"txt", "ref":"", "null":true, "unique":false ,"key": false }, 
    ]
    
    return (
      <MiniPage
        title="商号"
        name="corporation" 
        table_name="mst_corporation" 
        column={column}
      />
    );
  }
}

export default MstCorporationPage;
