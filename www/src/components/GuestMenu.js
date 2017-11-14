import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'

class GuestMenu extends Component {
  render() {
    return (
        <Menu.Menu>
            <Menu.Item 
              name='search' 
              active={this.props.activeItem === 'search'} 
              as={Link} 
              to='/comap' 
              onClick={this.props.onClick} > 
              <Icon name="globe" />検索
            </Menu.Item>
            <Menu.Item 
              name='report' 
              active={this.props.activeItem === 'report'} 
              as={Link} 
              to='/report' 
              onClick={this.props.onClick} >
              <Icon name="line chart" />一覧
            </Menu.Item>
       </Menu.Menu>
    );
  }
}

export default GuestMenu;
