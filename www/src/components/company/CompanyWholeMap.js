import React, { Component } from 'react'
import Wait from '../Wait'
import CompanyMap from './CompanyMap'
import CompanyFilter from './CompanyFilter'
import Resource from '../../tools/Ajax'
import { Segment, Divider } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

class CompanyWholeMap extends Component {
    
  componentWillMount() {
      this.setState({ isLoading:true, markers: []})
  }
  
  componentDidMount() {
      let query = {name: "wd_company", limit: 1000, offset:0}
      this.refresh(query)
  }
  
  typeContain(typeOptions, type){
      for(var t=0; t < typeOptions.length; t++){
          if(typeOptions[t].key === type.id){
              return true
          }
      }
      return false
  }

  refresh(query){
      this.setState({isLoading:true},()=>{
          Resource.list("company", query).then(res => {
            const markers = []
            const types = []
            res.data.map((item) =>{
                if(item.corporation == null) return null
                if(item.cocategory.length > 0){
                    item.cocategory.map((c) =>{
                        return types.push({id:c.category_id, name:c.category.name})
                    })
                }
                return markers.push({
                    id:item.id, 
                    lat:Number(item.corporation.address.lat), 
                    lng:Number(item.corporation.address.lng),
                    data:item})
            })
            const typeOptions = [{ key: 0, text: '全て', value: '全て' }]
            for(var i=0;i<types.length;i++){
                var exsit = this.typeContain(typeOptions, types[i])
                if(!exsit){
                    typeOptions.push({key: types[i].id, text: types[i].name, value: types[i].name})
                }
            }
            this.setState({
              list: res.data,
              isLoading: false,
              markers:markers,
              typeOptions:typeOptions
            })
          }).catch(res => { 
              this.setState({isLoading: false, error: true, errorCode: res.status})
          })
      })
  }
  
  onFilterChange(filter){
      const type = filter.type
      if(filter.key !== ""){
          const markers = []
          this.state.list.map((item) =>{
              if(item.corporation == null) return null
              if(item.name !== filter.key) return null
              return markers.push({
                  id:item.id, 
                  lat:Number(item.corporation.address.lat), 
                  lng:Number(item.corporation.address.lng),
                  data:item})
          })
          return this.setState({ searchType:type, markers:markers})
      }
      if(type === '全て' || type === ''){
          let query = {name: "wd_company", limit: 1000, offset:0}
          this.refresh(query)
      }else{
          const markers = []
          this.state.list.map((item) =>{
              if(item.corporation == null) return null
              if(item.cocategory.length === 0) return null
              item.cocategory.map((c) =>{
                  if(c.category.name === type){
                      return markers.push({
                          id:item.id, 
                          lat:Number(item.corporation.address.lat), 
                          lng:Number(item.corporation.address.lng),
                          data:item})
                  }
                  return null
              })
              return null
          })
          this.setState({ searchType:type, markers:markers})
      }
  }
  
  render() {
      if(this.state.isLoading) return <Wait />
      if(this.state.error) return <Redirect to={"/error?code=" + this.state.errorCode } />
      return(
        <div className="minibody">
          <Segment color='blue'>
            <CompanyFilter 
                coList={this.state.markers} 
                typeOptions={this.state.typeOptions} 
                onFilterChange={this.onFilterChange.bind(this)}/>
            <Divider />
            <CompanyMap markers={this.state.markers}/>
           </Segment>
          </div>
        )
  }
}

export default CompanyWholeMap;