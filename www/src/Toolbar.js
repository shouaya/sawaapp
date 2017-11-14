import React, { Component } from 'react';
import GuestMenu from './components/GuestMenu';
import CustomMenu from './components/CustomMenu';
import { Link } from 'react-router-dom'
import { Menu, Dropdown } from 'semantic-ui-react'

class Toolbar extends Component {

  constructor (props) {
	super(props)
	this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	this.handleMastMenuClick = (e, { name }) => this.setState({ activeItem: name,　activeTitle : e.target.text })
	this.state = {activeItem: "", activeTitle: "テーブル管理"}
  }
  
  render() {
	  const { activeItem, activeTitle } = this.state
	  if(this.props.user === undefined || this.props.user === null){
	      return (<Menu inverted pointing secondary>
	              <GuestMenu activeItem={activeItem} onClick={this.handleItemClick}/>
	              <Menu.Menu position='right'>
	                <Menu.Item as={Link} to='/login'>ログイン</Menu.Item>
	                <Menu.Item as={Link} to='/regist'>サインアップ</Menu.Item>
	              </Menu.Menu>
	          </Menu>)
	  }
	  const admin = this.props.user.role === "ADMIN"
	  return(
	  <Menu inverted pointing secondary>
	    <GuestMenu activeItem={activeItem} onClick={this.handleItemClick}/>
	    <CustomMenu activeItem={activeItem} onClick={this.handleItemClick} user={this.props.user} />
	    <Dropdown item text={activeTitle} style={ {display: admin ? 'block' : 'none'} } >
          <Dropdown.Menu>
		    <Menu.Item name='customer' active={activeItem === 'customer'} as={Link} to='/customer' onClick={this.handleMastMenuClick} >顧客</Menu.Item>
		    <Menu.Item name='company' active={activeItem === 'company'} as={Link} to='/company' onClick={this.handleMastMenuClick} >会社</Menu.Item>
		    <Menu.Item name='cocategory' active={activeItem === 'cocategory'} as={Link} to='/cocategory' onClick={this.handleMastMenuClick} >会社業種</Menu.Item>
		    <Menu.Item name='page' active={activeItem === 'page'} as={Link} to='/page' onClick={this.handleMastMenuClick} >会社ページ</Menu.Item>
		    <Menu.Item name='cotag' active={activeItem === 'cotag'} as={Link} to='/cotag' onClick={this.handleMastMenuClick} >会社tag</Menu.Item>
		    <Menu.Item name='tag' active={activeItem === 'tag'} as={Link} to='/tag' onClick={this.handleMastMenuClick} >tag</Menu.Item>
		    <Menu.Item name='category' active={activeItem === 'category'} as={Link} to='/category' onClick={this.handleMastMenuClick} >業界分類</Menu.Item>
		    <Menu.Item name='corporation' active={activeItem === 'corporation'} as={Link} to='/corporation' onClick={this.handleMastMenuClick} >商号</Menu.Item>
		  </Dropdown.Menu>
        </Dropdown>
		<Menu.Menu position='right'>
		    <Menu.Item as={Link} to='/logout'> ログアウト </Menu.Item>
		</Menu.Menu>
	  </Menu>
	 )
  }
}

export default Toolbar;
