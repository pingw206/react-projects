import React from "react";
import {Link, NavLink, withRouter } from 'react-router-dom';
//link的作用同e.prevent.default() 类似，这样不用每次都刷新
const Navbar = (props) => {
  // setTimeout(() => {
  //   props.history.push('./about')
  // },2000)  //自动跳转到about页面
  return (
    <nav className='nav-wrapper red darken-3'>
      <div className='container'>
        <Link className='brand-logo' to='/'>Poke'Times</Link>
        <ul className='right'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);