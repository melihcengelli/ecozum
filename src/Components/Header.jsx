import React from 'react'
import { useSelector } from 'react-redux';
import logo from '../images/logo.png';
import { UserOutlined } from '@ant-design/icons';

function Header() {
  const name = window.location.href.split("/").reverse()[0]
  return (
    <div id="header">
        <img id="logo" src={logo} alt="Logo" />
        {
          name[0]!=="-" ?
          <span id="namearea">
            <UserOutlined />
            <p id="namelabel">{name}</p>
          </span>
          :
          <></>
        }
        
        
    </div>
  )
}

export default Header