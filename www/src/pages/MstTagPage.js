import React, { Component } from 'react';
import MiniPage from '../tools/Page';
class MstTagPage extends Component {
  
  render() {
    const column = [
          {"title":"tag关键字", "name":"name", "type":"txt", "ref":"", "null":false, "unique":true ,"key": true }, 
          {"title":"説明", "name":"description", "type":"txt", "ref":"", "null":true, "unique":false ,"key": false }, 
    ]
    
    return (
      <MiniPage
        title="tag"
        name="tag" 
        table_name="mst_tag" 
        column={column}
      />
    );
  }
}

export default MstTagPage;
