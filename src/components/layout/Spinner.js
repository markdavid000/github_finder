import React, { Fragment } from 'react';
import spinner from './preview.gif';

const Spinner = () => {
  return (
    <Fragment>
      <div className='all-center'>
        <img
          className='img_width'
          src={spinner}
          alt='Loading...'
          style={{
            margin: 'auto',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        />
      </div>
    </Fragment>
  );
};

export default Spinner;
