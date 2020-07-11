import React from 'react';

import ReactLoading from 'react-loading';

const LoaderOverlayStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  minWidth: '2.5rem',
  width: '100%',
  minHeight: '2.5rem',
  height: '100%',
  zIndex: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  backgroundColor: 'transparent'
};

const LoaderWrapper = ({ isLoading, loadingText, children }) => (
  <div style={{ position: 'relative' }}>
    {children}
    {isLoading ? (
      <div style={LoaderOverlayStyles}>
        {loadingText ? <p>{loadingText}</p> : null}
        <ReactLoading
          type={'spin'}
          color={'black'}
          height={'5%'}
          width={'5%'}
        />
      </div>
    ) : null}
  </div>
);

export default LoaderWrapper;
