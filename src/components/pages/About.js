import React from 'react';
import Link from 'react-router-dom/Link';

const About = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/' className='btn btn-light'>
            Back to Home
          </Link>
        </li>
      </ul>
      <div className='all-center'>
        <h1 className='py-1'>About this App</h1>
        <p style={width}>
          GitHub Finder App Version 2.1.0, is a Web App that shows you all the
          Users and their Repositories on GitHub.
        </p>
        <p style={width}>It was built with HTML, CSS, and React</p>
        <p style={width}>
          It uses an API from{' '}
          <a
            href='http://api.github.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            https://api.github.com/
          </a>
          that fetches the Users and their Repositories.
        </p>
      </div>
    </div>
  );
};

const width = {
  width: '100%',
  backgroundColor: '#fff',
  marginBottom: '2rem',
  padding: '1rem',
  borderRadius: '5px',
  color: '#000',
  fontWeight: 500,
};

export default About;
