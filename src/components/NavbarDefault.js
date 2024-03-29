import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/gdsclogo.svg';
import { useLocation } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Sidebar from './Sidebar';
import { IconContext } from 'react-icons';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from './NavbarDefault.module.css';

function NavbarDefault() {
  const [isOpen, handleOpen] = useState(false);
  const location = useLocation();
  return (
    <div className={isOpen ? 'navbar__main navbar__stretch' : 'navbar__main'}>
      <img className={`${styles.logo}`} src={Logo} alt='dscjss'  />
      <MediaQuery maxDeviceWidth={990}>
        {isOpen ? (
          <IconContext.Provider value={{ className: 'menu-icon close' }}>
            <div>
              <AiOutlineClose onClick={() => handleOpen(!isOpen)} />
            </div>
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ className: 'menu-icon open' }}>
            <div>
              <AiOutlineMenu onClick={() => handleOpen(!isOpen)} />
            </div>
          </IconContext.Provider>
        )}

        <Sidebar isOpen={isOpen} handleOpen={handleOpen} />
      </MediaQuery>
      <div className='navbar__content'>
        <Link
          to='/'
          className={`nav__links ${
            location.pathname === '/' ? 'active_link' : ''
          }`}
        >
          Home
        </Link>
        <Link
          to='/projects'
          className={`nav__links ${
            location.pathname === '/projects' ? 'active_link' : ''
          }`}
        >
          Projects
        </Link>
        <Link
          to='/team'
          className={`nav__links ${
            location.pathname === '/team' ? 'active_link' : ''
          }`}
        >
          Team
        </Link>
        <Link
          to='/events'
          className={`nav__links ${
            location.pathname === '/events' ? 'active_link' : ''
          }`}
        >
          Events
        </Link>
        <Link
          to='/alumni'
          className={`nav__links ${
            location.pathname === '/alumni' ? 'active_link' : ''
          }`}
        >
          Alumni
        </Link>
        <a
          href='https://www.instagram.com/gdscjssaten/'
          className='nav__links primary-btn'
          target='_blank'
          rel='noopener noreferrer'
        >
          Connect
        </a>
      </div>
    </div>
  );
}

export default NavbarDefault;
