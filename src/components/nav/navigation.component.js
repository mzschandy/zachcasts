import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link, navigate } from 'gatsby';
// import Logo from '../../../static/logos/pulse.png';
import NavContext from './nav.context';

import './navigation.scss';

export default function Navigation() {
  const nav = useContext(NavContext);

  console.log('background context > ', nav);
  return (
    <div id="navigation" style={{ backgroundColor: nav.background }}>
      <div className="inner">
        {!nav.isHome && (
        <div className="back">
          <i onClick={() => navigate(-1)} className="fa fa-arrow-left" />
        </div>
        )}
        <div className="logo">
          {/* <img src={Logo} alt="logo"/> */}
        </div>
        <Nav>
          <div>
            <Link to="/" className="site-title">Zachcasts</Link>
            beta
          </div>
        </Nav>
      </div>
    </div>
  );
}
