import React, { Component } from 'react';
import { Header, Grid, Dropdown, Button, Label } from 'semantic-ui-react'
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
class CompanyFilter extends Component {
    
    componentWillMount() {
        const colist = this.props.coList.map((co) =>{
            return {name: co.data.name ,short: co.data.shortName, id:co.data.id}
        })
        this.setState({ searchKey:'', searchType:'' ,suggestions: [], list:colist})
    }

    onSearchKeyChange(e){
        this.setState({ searchKey: e.target.value })
    }
    
    onTypeChange(e, obj){
        this.setState({ searchType: obj.value })
    }
    
    onSearchSubmit(e){
        var query = {}
        query.key = this.state.searchKey
        query.type = this.state.searchType
        this.props.onFilterChange(query)
    }
    
    onChange(event, data){
        this.setState({
            searchKey: data.newValue
        });
    };
      
    onSuggestionsFetchRequested({ value }){
        this.setState({
          suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested() {
        this.setState({
          suggestions: []
        });
    };
    
    escapeRegexCharacters(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    getSuggestions(value) {
        const escapedValue = this.escapeRegexCharacters(value.trim());
        if (escapedValue === '') {
          return [];
        }
        const regex = new RegExp('\\b' + escapedValue, 'i');
        return this.state.list.filter(person => regex.test(this.getSuggestionDisplay(person)));
    }

    getSuggestionDisplay(suggestion) {
        return `${suggestion.short}`;
    }
    
    getSuggestionValue(suggestion) {
        return `${suggestion.name}`;
    }

    renderSuggestion(suggestion, { query }) {
        const suggestionText = `${suggestion.short}`;
        const matches = AutosuggestHighlightMatch(suggestionText, query);
        const parts = AutosuggestHighlightParse(suggestionText, matches);
        return (
            <span>
                <Label color='blue' horizontal>{suggestion.name}</Label>
                <br/>
                 {parts.map((part, index) => {
                      const className = part.highlight ? 'highlight' : null;
                      return (
                        <span className={className} key={index}>{part.text}</span>
                      );
                    })}
            </span>
        );
    }
    
    render() {
        const typeOptions = this.props.typeOptions
        const { searchKey, suggestions } = this.state
        
        const inputProps = {
          placeholder: "ローマ字",
          value: searchKey,
          onChange: this.onChange.bind(this)
        };
        return (
              <div>
                <Header as='h3'>ローマ字を入力してください</Header>
                <Grid divided>
                    <Grid.Row>
                      <Grid.Column width={4}>
                          <Autosuggest 
                              suggestions={suggestions}
                              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                              onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                              getSuggestionValue={this.getSuggestionValue.bind(this)}
                              renderSuggestion={this.renderSuggestion.bind(this)}
                              inputProps={inputProps} />
                      </Grid.Column>
                      <Grid.Column width={3}>
                          <Dropdown
                              button
                              className='icon'
                              fluid
                              floating
                              labeled
                              icon='world'
                              options={typeOptions}
                              search
                              onChange={this.onTypeChange.bind(this)}
                              value={this.state.searchType}
                              text={this.state.searchType === '' ? '業界分類':this.state.searchType} />
                      </Grid.Column>
                      <Grid.Column width={2}>
                          <Button fluid　primary onClick={this.onSearchSubmit.bind(this)}>検索</Button>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
              </div>
        );
    }
}
export default CompanyFilter;
