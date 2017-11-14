import React, { Component } from 'react'
import { Segment, Container, Header, Grid } from 'semantic-ui-react'
import Resource from '../../tools/Ajax'
import Wait from '../Wait'
import Tags from '../Tags'
import CompanyBase from './CompanyBase'
import CompanyCorporation from './CompanyCorporation'
import CompanyShow from './CompanyShow'
import { Redirect } from 'react-router-dom'

class CompanyInfo extends Component {

  componentWillMount(){
    if(window.location.search !== ""){
        let array  = window.location.search.slice(1).split('=')
        this.refresh(array[1])
    }else{
        this.setState({isLoading: false, error: true, errorCode: 404})
    }
  }
  
  refresh(id){
    this.setState({isLoading:true},()=>{
        Resource.item("company", id).then(company => {
            let qt = {name: "wd_cotag-cid", limit: 100, offset: 0}
            qt.params = [{ "key": "company_id", "value": company.data.id}]
            Resource.list("cotag", qt).then(tags => {
                let qs = {name: "wd_samecompany-list", limit: 10, offset: 0}
                qs.params = [{ "key": "source_id", "value": company.data.id}]
                Resource.list("samecompany", qs).then(sames => {
                    var list = [];
                    for(var i in tags.data){
                      list.push({text: tags.data[i].tag.name, value: tags.data[i].point});
                    }
                    this.setState({tags: list, isLoading: false, item: company.data, sames : sames.data})
                }).catch(res => {  this.setState({isLoading: false, error: true, errorCode: res.status}) })
            }).catch(res => {  this.setState({isLoading: false, error: true, errorCode: res.status}) })
        }).catch(res => { 
            this.setState({ isLoading: false, error: true, errorCode: res.status})
        })
    })
  }
  
  render() {
    if(this.state.isLoading) return <Wait />
    if(this.state.error) return <Redirect to={"/error?code=" + this.state.errorCode } />
    const info = this.state.item
    //console.log(this.state)
    return (
    <div className="minibody">
	    <Segment color='blue'>
	        <Container textAlign='left'>
	          <Header as='h2'>{info.name}</Header>  
    	      <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='left'>
                  <Grid.Column>
                    <CompanyBase info={info} />
                  </Grid.Column>
                  <Grid.Column style={{ paddingLeft: '5em'}}>
                    <CompanyShow info={info} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
                <br />
                <CompanyCorporation info={info} />
                <br />
                <br />
                <br />
                <Tags tags={this.state.tags} />
                <br />
                <br />
            </Container>
        </Segment>
    </div>
    );
  }
}

export default CompanyInfo