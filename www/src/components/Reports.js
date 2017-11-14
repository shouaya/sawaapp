import React, { Component } from 'react';
import Wait from './Wait'
import Resource from '../tools/Ajax'
import { Container, Segment, Divider, Header, Grid, Button } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import {BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ScatterChart, Scatter} from 'recharts'
class Reports extends Component {
    
    componentWillMount() {
        this.setState({ isLoading:true})
    }
    
    componentDidMount() {
        let query = {name: "wd_company-reportcapitaldesc", limit: 1000, offset:0}
        this.refresh(query)
    }
    
    showBuildDate(){
        this.setState({ type: 'buildDate'})
    }
    
    showCapital(){
        this.setState({ type: 'capital'})
    }
    
    refresh(query){
        this.setState({isLoading:true},()=>{
            Resource.list("company", query).then(res => {
                console.log(res)
                const colist = []
                res.data.map((item) =>{
                    if(item.capital === null) return null
                    return colist.push({
                        id:item.id,
                        name:item.name,
                        capital:Number(item.capital)})
                })
              this.setState({
                list: res.data,
                isLoading: false,
                colist:colist,
                type:'capital'
              })
            }).catch(res => { 
                this.setState({isLoading: false, error: true, errorCode: res.status})
            })
        })
    }
     render() {
        if(this.state.isLoading) return <Wait />
        if(this.state.error) return <Redirect to={"/error?code=" + this.state.errorCode } />
        const dataCapital = this.state.colist.sort(function(a, b) {
            return a.capital > b.capital ? 1 : -1;
        });
        const dataBuildDate = [{x: 100, y: 200, z: 200}, {x: 120, y: 100, z: 260},
                      {x: 170, y: 300, z: 400}, {x: 140, y: 250, z: 280},
                      {x: 150, y: 400, z: 500}, {x: 110, y: 280, z: 200}]

        return(
            <div className="minibody">
              <Segment color='blue'>
                 <div>
                    <Header as='h3'>会社検索</Header>
                    <Grid columns='equal' divided　stackable>
                        <Grid.Row>
                          <Grid.Column width={4}>
                              <Button positive onClick={this.showBuildDate.bind(this)}>設立日によりプレビュー</Button>
                          </Grid.Column>
                          <Grid.Column width={4}>
                              <Button positive onClick={this.showCapital.bind(this)}>資本金によりプレビュー</Button>
                          </Grid.Column>
                          <Grid.Column width={4}>
                              <Button>売上によりプレビュー</Button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                  </div>
              <Divider />
                  <Container textAlign='left' style={ {display: this.state.type==='capital' ? 'block' : 'none'} }>
                        <BarChart width={1200} height={600} data={dataCapital}
                            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                       <XAxis dataKey="name"/>
                       <YAxis/>
                       <CartesianGrid strokeDasharray="3 3"/>
                       <Tooltip/>
                       <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
                       <ReferenceLine y={0} stroke='#000'/>
                       <Brush dataKey='name' height={30} stroke="#8884d8"/>
                       <Bar dataKey="capital" fill="#8884d8" />
                      </BarChart>
                   </Container>
                   <Container textAlign='left' style={ {display: this.state.type==='buildDate' ? 'block' : 'none'} }>
                       <ScatterChart width={1200} height={600} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                        <XAxis dataKey={'x'} type="number" name='stature' unit='cm'/>
                        <YAxis dataKey={'y'} type="number" name='weight' unit='kg'/>
                        <CartesianGrid />
                        <Scatter name='BuildDate' data={dataBuildDate} fill='#8884d8'/>
                        <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                      </ScatterChart>
                   </Container>
               </Segment>
              </div>
            )
    }
}

export default Reports;