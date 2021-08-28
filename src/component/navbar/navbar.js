import * as React from 'react';
import '../../styles/navbar.scss';
import companyLogo from '../../assets/stockbit.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className=''>
      <ul>
        <li>
          <img className='company-logo' src={companyLogo} alt='company-logo' />
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/watchlist'>Watchlist</Link>
        </li>
      </ul>
    </div>
  );
}
