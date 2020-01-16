import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeSelectUserAuth } from '../store/selectors/UserSelectors';
import { userLogout } from '../store/actions/UserActions';
import { Link } from 'gatsby';
import HeaderOptions from './headerOptions';
import { USER_TYPES } from '../constants/userTypes';

const Header = ({ siteTitle }) => {
  const dispatch = useDispatch();

  const auth = useSelector(makeSelectUserAuth());

  const handleLogout = () => dispatch(userLogout());

  const getUserType = () => {
    if (!auth) {
      return USER_TYPES.ANNONYMOUSE;
    }
    return USER_TYPES.WRITER;
  };

  const renderAuthUserContent = () => (
    <div>
      <p style={{ color: 'white', textColor: 'white' }}>User</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
        display: 'flex',
        displayDirect: 'row'
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`
        }}
      >
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
      </div>
      <HeaderOptions type={getUserType()}></HeaderOptions>
      {auth ? renderAuthUserContent() : <Link to="/sign-in">Sign in</Link>}
    </header>
  );
};

export default Header;
