import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    avatar_url,
    name,
    location,
    bio,
    html_url,
    login,
    blog,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    email,
    twitter_username,
  } = user;

  if (loading) return <Spinner />;

  return (
    <div>
      <Link to='/' className='btn btn-light'>
        Back to Home
      </Link>
      Hireable: {''}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <div>
            {location && (
              <Fragment>
                <p>Location: {location}</p>
              </Fragment>
            )}
          </div>
        </div>
        <div className='justify_content'>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary my-1'
          >
            View Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username : </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company : </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website : </strong>
                  {blog}
                </Fragment>
              )}
            </li>
            <li>
              {email && (
                <Fragment>
                  <strong>Email : </strong>
                  {email}
                </Fragment>
              )}
            </li>
            <li>
              {twitter_username && (
                <Fragment>
                  <strong>Twitter Username : </strong>
                  {twitter_username}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-success'>
          <p>Followers : {followers}</p>
        </div>
        <div className='badge badge-primary'>
          <p>Following : {following}</p>
        </div>
        <div className='badge badge-danger'>
          <p>Public Repos : {public_repos}</p>
        </div>
        <div className='badge badge-dark'>
          <p>Public Gists : {public_gists}</p>
        </div>
      </div>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
