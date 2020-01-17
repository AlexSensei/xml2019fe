import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  makeSelectUserAuth,
  makeSelectUserData
} from '../store/selectors/UserSelectors';
import { userLogout, userGet } from '../store/actions/UserActions';
import { Link } from 'gatsby';
import HeaderOptions from './headerOptions';
import { USER_TYPES } from '../constants/userTypes';

const Header = ({ siteTitle }) => {
  const dispatch = useDispatch();

  const auth = useSelector(makeSelectUserAuth());
  const user = useSelector(makeSelectUserData());

  const handleLogout = () => dispatch(userLogout());
  const handleUserGet = () => dispatch(userGet());

  useEffect(() => {
    if (auth) {
      handleUserGet();
    }
  }, [auth]);

  const getUserType = () => {
    if (!auth) {
      return USER_TYPES.ANNONYMOUSE;
    } else {
      return user.role;
    }
  };

  const renderAuthUserContent = () => (
    <React.Fragment>
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </React.Fragment>
  );

  return (
    <header style={headerStyles}>
      <div style={navStyles}>
        <a href="/">
          <h1>{siteTitle}</h1>
        </a>

        <HeaderOptions type={getUserType()}></HeaderOptions>
        {auth ? renderAuthUserContent() : <Link to="/sign-in">Sign in</Link>}
      </div>
    </header>
  );
};

const headerStyles = {
  color: 'white',
  backgroundColor: '#1B1D2D',
  justifyContent: 'center',
  alignItems: 'center'
};

const navStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontFamily: 'Rubik-Medium',
  justifyContent: 'space-between',
  color: 'white'
};

export default Header;
