import React, { Component } from 'react';
import MiniPage from '../tools/Page';
class MstCategoryPage extends Component {
  
  render() {
    const column = [
          {"title":"業界コード", "name":"code", "type":"txt", "ref":"", "null":false, "unique":false ,"key": false }, 
          {"title":"業界名", "name":"name", "type":"txt", "ref":"", "null":false, "unique":false ,"key": true }, 
          {"title":"説明", "name":"description", "type":"txt", "ref":"", "null":false, "unique":false ,"key": false }, 
    ]
    
    return (
      <MiniPage
        title="業界分類"
        name="category" 
        table_name="mst_category" 
        column={column}
      />
    );
  }
}

export default MstCategoryPage;
