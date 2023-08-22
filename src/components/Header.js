import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <> 
      <header className='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='header-innr'>
                        <div className='logo'>
                            <Link><img src='./images/logo.png' alt='Logo' /></Link>
                        </div>
                        <div className='nav-menu'>
                            <ul className='clearfix reset-list'>
                                <li className='current-menu-item'><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/skill'>Skills</Link></li>
                                <li><Link to='/portfolio'>Portfolio</Link></li>
                                <li><Link to='/service'>Service</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}
export default Header;