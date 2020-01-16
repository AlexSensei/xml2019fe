import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeSelectUserAuth } from '../store/selectors/UserSelectors';
import { userLogout } from '../store/actions/UserActions';

const Header = ({ siteTitle }) => {
  const dispatch = useDispatch();

  const auth = useSelector(makeSelectUserAuth());

  const handleLogout = () => dispatch(userLogout());

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
      {auth && <button onClick={handleLogout}>Logout</button>}
    </header>
  );
};

export default Header;
