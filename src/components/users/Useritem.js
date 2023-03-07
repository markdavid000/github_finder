import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>

      <div>
        <Link
          to={`/User/${login}`}
          className='btn btn-primary btn-sm my-1 rounded'
        >
          See More
        </Link>
      </div>
    </div>
  );
};

Useritem.prototype = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
