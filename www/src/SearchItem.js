import React, { Component } from 'react'
import { Search, Grid } from 'semantic-ui-react'
import Resource from './Ajax.js';
import Source from './Source.js';

class SearchItem extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: this.props.value, source: Source[this.props.col.replace("_id", "")] })

  handleResultSelect = (e, result) => {
    this.setState({ value: result.id })
    this.props.onSearchChange(result.id)
  }

  handleSearchChange = (e, data) => {
    this.setState({ isLoading: true, value: data })
    setTimeout(() => {
      let query = this.state.source.query;
      query.params = [{key:this.state.source.col, value:'%' + data + '%'}]
      Resource.list(this.state.source.name, query).then(res => {
          if(res.data.length > 0){
              let results = []
              for (var i = 0; i < res.data.length; i++) {
                  let result = {}
                  result.key = i
                  result.id = res.data[i].id
                  result.title = res.data[i][this.state.source.col]
                  results.push(result) 
              }
              this.setState({
                isLoading: false,
                results: results,
              })
          }else{
              this.setState({
                  isLoading: false,
                  results: [],
              })
              this.props.onSearchChange(data)
          }
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            defaultOpen={false}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default SearchItem;
